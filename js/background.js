const images = [
    'http://tourimage.interpark.com/BBS/Tour/FckUpload/201404/6353302977881912098.jpg',
    'https://cdn.crowdpic.net/detail-thumb/thumb_d_E5B1248CFA4AD85FDE4842258E50F880.jpg',
    'https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3zNv/image/i_AlF0grAUpYObKl5g1gAxXSrdQ.jpg',
    'http://tourimage.interpark.com/BBS/Tour/FckUpload/201807/6366829857993995127.png',
    'https://t1.daumcdn.net/cfile/blog/230D313C54F8536037',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');

bgImage.src = `${chosenImage}`;
bgImage.id = 'backImg';

document.body.appendChild(bgImage);

// 가장위에 엘리먼트 추가
// document.body.prepend(bgImage);
