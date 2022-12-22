const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            selectActive: 0,
            contactsActive: 0,
            newMessage: '',
            messageBot: 'ok',
            search: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    dating: '',
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                    {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                        date: `${this.currentDate()}`,
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: `${this.currentDate()}`,
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        selectChat(index){
            this.contactsActive = index;
        },
        addMessage(){
            let mess = {   
                date: `${this.currentDate()}`, 
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.contactsActive].messages.push(mess);
            this.newMessage = '';
        },
        addReceived(){
            let messReceived = {  
                date: `${this.currentDate()}`,  
                message: this.messageBot,
                status: 'received'
            }
            this.contacts[this.contactsActive].messages.push(messReceived);
            this.newMessage = '';
        },
        timeOut(){
            setTimeout(this.addReceived,1000);
        },
        searchTask(){
            let searchFriend;
            if(this.search != ''){
                searchFriend = this.contacts.filter((elem) => {
                   return elem.name.toLowerCase().includes(this.search);
                })
            }
            else{
                return searchFriend = this.contacts;
            }
            return searchFriend
        },
        removeMessage(messIndex){
            let remove = this.contacts[this.contactsActive].messages.splice(messIndex, 1);
        },
        currentDate(){
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
            return date;
        }    
    },
}).mount('#app')