import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import styles from './Home.style';
import FloatingButton from '../../components/FloatingButton';
import RoomCard from '../../components/RoomCard';
import RoomContentModal from '../../components/modal/RoomContentModal';
import parseData from '../../utils/parseData';
import ConfirmationModal from '../../components/modal/ConfirmationModal';


const Home = ({navigation})=> {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [roomList, setRoomList]=useState([]);
    const [confirmModalVisibility, setConfirmModalVisibility]=useState(false);
    const [joinRoomId, setJoinRoomId]=useState(null);

    useEffect(() => {
        database()
        .ref('/rooms')
        .on('value', snapshot => {
            const values=snapshot.val();
            const rooms=parseData(values);
            setRoomList(rooms);
        });
    }, []);

    const listRooms = ({item}) => <RoomCard room={item} curr_user={auth().currentUser.uid} join={handleJoin} />

    const toggleVisibility = (modal) =>{
        if(modal=="modalVisibility"){
            setModalVisibility(!modalVisibility);
        }else if(modal=="confirmModalVisibility"){
            setConfirmModalVisibility(!confirmModalVisibility);
        }
    }

    const handleContent = (title, topic) =>{
        toggleVisibility("modalVisibility");
        sendContent(title, topic);
    }

    const sendContent = (title, topic)=>{
        const newRoom = database().ref('/rooms').push();
        const user= auth().currentUser;

        newRoom
        .set({
            name:title,
            host_id: user.uid,
            host: user.email.split('@')[0],
            date: (new Date()).toLocaleDateString()+' '+(new Date()).toTimeString(),
            topic: topic,
        });
    }
    
    const handleJoin = async(room_id) =>{
        const user= auth().currentUser;

        const room=roomList.find(r =>{
            return r.id===room_id;
        })

        if(room.host_id == user.uid){
            return navigation.navigate('Room', {room:room});
        }

        
        const val=parseData(room.participants);

        if(val){
            const a=val.find(r=>{
                return r.partipicant_id===user.uid;
            });

            if(a){
                navigation.navigate('Room', {room:room});
            } else {
                toggleVisibility("confirmModalVisibility");
                setJoinRoomId(room_id);
            }
        }else{
            toggleVisibility("confirmModalVisibility");
            setJoinRoomId(room_id);
        }


    }

    const joinRoom = ()=>{
        toggleVisibility("confirmModalVisibility");
        const newPartipicant = database().ref('/rooms/' +joinRoomId + '/participants').push();
        const user= auth().currentUser;

        newPartipicant
        .set({
            partipicant_id: user.uid,
            partipicant: user.email.split('@')[0],
            date: (new Date()).toISOString(),
        })
        .then(() => {

            const room=roomList.find(r =>{
                return r.id===joinRoomId;
            })
            navigation.navigate('Room', {room:room});
        });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={roomList}
                renderItem={listRooms}
                numColumns={2}
            />

            <FloatingButton icon="plus" onPress={()=>toggleVisibility("modalVisibility")} />
            <RoomContentModal 
                isVisible={modalVisibility} 
                onClose={()=>toggleVisibility("modalVisibility")}
                onSend={handleContent}
            />
            <ConfirmationModal 
                isVisible={confirmModalVisibility}
                onClose={()=>toggleVisibility("confirmModalVisibility")}
                onSend={joinRoom}
            />
        </View>
    )
}

export default Home;
