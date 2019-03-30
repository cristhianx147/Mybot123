const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setPresence({
       status: "Enlinea",
       game:{
           name: "Holas",
           type: "Jugando"
       }
   });

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (!message.content.startsWith(config.prefix)) return;
 if (message.author.bot) return;

const hook = new Discord.WebhookClient('561354964325236748', 'jfIB_eI05CQFPzlzQAYCzGt2HEmWwj2CnqXKLlKGWj7P1YGaZQG842w8GuYG-YSCDKia');


  if (command === 'join') {
      let Canalvoz = message.member.voiceChannel;
      if (!Canalvoz || Canalvoz.type !== 'voice') {
      message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
      } else if (message.guild.voiceConnection) {
      message.channel.send('Ya estoy conectado en un canal de voz.');
      } else {
       message.channel.send('Conectando...').then(m => {
            Canalvoz.join().then(() => {
                 m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
           }).catch(error => message.channel.send(error));
       }).catch(error => message.channel.send(error));
      }
  }

  if (command === 'leave') {
      let Canalvoz = message.member.voiceChannel;
      if (!Canalvoz) {
          message.channel.send('No estoy en un canal de voz.');
      } else {
          message.channel.send('Dejando el canal de voz.').then(() => {
          Canalvoz.leave();
          }).catch(error => message.channel.send(error));
      }

  }
  var dispatcher
  if(command === 'play') {

    const ytdl = require('ytdl-core');
    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    voiceChannel.join()
      .then(connection => {
        const url = ytdl(args.toString(), { filter: "audioonly"});
        dispatcher = connection.playStream(url);
        message.channel.send(':dvd:Reproduciendo ahora: '+ args);
        message.delete();
      })
      .catch(console.error);
      }

      else if (command === "pause") {
      let dispatcher = message.guild.voiceConnection.dispatcher
      dispatcher.pause()
      }
      else if (command === "resume") {
      let dispatcher = message.guild.voiceConnection.dispatcher
      dispatcher.resume()
      }
      else if (command === "end") {
      let dispatcher = message.guild.voiceConnection.dispatcher
      dispatcher.end()
      }


  if(message.content.startsWith(prefix+"Elsword-Tears")) {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    message.channel.send("////Knight Emperor-Class////= 1 :Windmill- rojo/morado 2 :Imperial crusher-morado/rojo 3 :Sandstorm-morado/rojo 4 :Mega Slash-morado 5 :Mortal Blow-morado <>                                                                                                                                                                                                                                                                                                                             /// Rune Master-Class//// = 1 Overs Geyser-Azul/Morado 2 :Sword Fire-Azul/morado 3: Luna Blade-Morado <>                                                                                                                                                                                                                                                                                                                                                                                                        ///Immortal-Class/// 1 : Blade Circle-Rojo 2 :Final Strike-rojo/morado 3 :Sword Fall-rojo/morado 4 :Sword Blasting-Morado "); }

});



});
client.on("guildMemberAdd", (member) => {
    let canal = client.channels.get('560178058447945740');
    canal.send(`Hola ${member.user}, bienvenido al servidor Guapa o Guapo 7u7 ${member.guild.name} pasala bien hermoso o hermosa 7u7!.`);
   });

   client.on("guildMemberRemove", (member) => {
    let canal = client.channels.get('560178058447945740');
    canal.send(`${member.user}, Bai bai popo.`);






});

client.login(process.env.BOT_TOKEN);
