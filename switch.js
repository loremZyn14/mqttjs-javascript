// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

var broker = 'wss://mqtt.eclipse.org:443/mqtt';
var client  = mqtt.connect(broker);

var status_header = document.getElementById('status-header')

client.on('connect', function () {
    status_header.innerHTML = 'Connected to '+broker; 
    console.log('Connected to '+broker)
    client.subscribe('junrey/messages', function (err) {
        if (!err) {
            client.publish('junrey/messages', 'Hello mqtt')
        }
    })
})

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
// //   client.end()
// })

// var pub_button = document.getElementById('pub-button');
// var pub_input = document.getElementById('pub-input');
// pub_button.addEventListener('click', () => {
//   // console.log('clicked');
//   // console.log(pub_input.value);
//   client.publish('junrey/messages', pub_input.value)
//   pub_input.value = "";
// })

const pub_switch_0 = document.getElementById('pub-switch-0');
const pub_switch_1 = document.getElementById('pub-switch-1');
const pub_switch_2 = document.getElementById('pub-switch-2');
pub_switch_0.onclick = () => {
    console.log('0',pub_switch_0.checked)
    client.publish('cpx-switch/0', String(pub_switch_0.checked))
}
pub_switch_1.onclick = () => {
    console.log('1',pub_switch_1.checked)
    client.publish('cpx-switch/1', String(pub_switch_1.checked))
}
pub_switch_2.onclick = () => {
    console.log('2',pub_switch_2.checked)
    client.publish('cpx-switch/2', String(pub_switch_2.checked))
}
