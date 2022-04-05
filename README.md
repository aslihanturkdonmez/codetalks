# Code Talks Realtime Chat App (Gerçek Zamanlı Mesajlaşma Uygulaması)

```sh
İstenilen konuda oda oluşturulabilen veya var olan bir odaya katılım sağlanabilen gerçek zamanlı mesajlaşma uygulaması 
```

<!--
### İçindekiler
<ul>
  <li><a href="#teknolojiler">Teknolojiler</a></li>
  <li><a href="#kurulum">Kurulum</a></li>
  <li><a href="#görünüm">Görünüm</a></li>
  
</ul>
-->

### Teknolojiler

<ul>
  <li><a href="https://reactnative.dev/">React Native<a/></li>
  <li><a href="https://reactnavigation.org/">React Navigation<a/></li>
  <li><a href="https://redux.js.org/">Redux<a/></li>
  <li><a href="https://rnfirebase.io/auth/usage/">Firebase Authentication<a/></li>
  <li><a href="https://rnfirebase.io/database/usage/">Firebase Realtime Database<a/></li>    
</ul>

### Kurulum

Terminal üzerinde aşağıdaki komutlar çalıştırılmalıdır: 
```sh
git clone https://github.com/aslihanturkdonmez/codetalks.git
cd codetalks
npm install
```
Android için

Firebase projesi oluşturulmalı ve <b>google-services.json</b> dosyası android/app klasörü altına konulmalıdır. 
```sh
react-native run-android
```

IOS için

Firebase projesi oluşturulmalı ve <a href="https://rnfirebase.io/#3-ios-setup">linkteki</a> adımlar takip edilerek kurulum tamamlanmalıdır. 
Projeyi çalıştırmak için: 
```sh
cd ios && pod install
cd ..
react-native run-ios
```

### Görünüm
<div>
  <img src="https://user-images.githubusercontent.com/43846857/161830846-ed9baee3-91a9-413e-b957-90125e9294c3.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830850-75fb4063-9e13-40e4-823d-d17dd1356405.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830862-17fa8787-c584-4a8f-a6f9-cf07924c15ad.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830897-69baa2e7-56f1-4046-98fe-2f81144a1874.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830922-a80e8b54-8cc6-4c0a-b187-f50686aaf64a.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830930-d85cf6d5-3d4c-4876-a0b5-2e22778d9e3f.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830941-2daba16e-a3f1-475b-b017-374de890f152.png" height=500/>
  <img src="https://user-images.githubusercontent.com/43846857/161830946-d8422fe9-7c69-43b2-98ec-f1c45450c88a.png" height=500/>
</div>
