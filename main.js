/**

Lista giocatori di basket

Cose fatte:
- stampa di una lista di giocatori
- ricerca filtrata dei giocati
- al click mostriamo le statistiche del giocate
- possibilità di modifica del punteggio ottenuto dal giocatore
- aggiunta di una nuova partita
- mostrare un titolo per la sezione partite

Cose da fare:
- in base al punteggio del giocatore mostriamo una classe o no
- rimozione di una partita tramite icona
- aggiunta nuovo giocatore con valori statistiche casuali


**/

var app = new Vue({
    el: '#app',
    data: {
        players: [
          {
            nome:"Clarence Erickson",
            rimbalzi:15,
            falli:11,
            puntiSegnati:46,
            visible:true,
            matches : []
          },
          {
            nome:"Jorge McGee",
            rimbalzi:5,
            falli:15,
            puntiSegnati:34,
            visible:true,
            matches : []
          },
          {
            nome:"Bryan Baldwin",
            rimbalzi:20,
            falli:20,
            puntiSegnati:41,
            visible:true,
            matches : []
          },
          {
            nome:"Stephen Kaufman",
            rimbalzi:13,
            falli:11,
            puntiSegnati:39,
            visible:true,
            matches : []
          },
          {
            nome:"Ian Graham",
            rimbalzi:18,
            falli:19,
            puntiSegnati:44,
            visible:true,
            matches : []
          },
          {
            nome:"Jerome Rowe",
            rimbalzi:18,
            falli:10,
            puntiSegnati:32,
            visible:true,
            matches : []
          },
          {
            nome:"William Giles",
            rimbalzi:9,
            falli:18,
            puntiSegnati:30,
            visible:true,
            matches : []
          },
          {
            nome:"Jaime Jenkins",
            rimbalzi:11,
            falli:10,
            puntiSegnati:36,
            visible:true,
            matches : []
          },
          {
            nome:"Arnold Valenzuela",
            rimbalzi:14,
            falli:16,
            puntiSegnati:45,
            visible:true,
            matches : []
          },
          {
            nome:"Timothy Stafford",
            rimbalzi:7,
            falli:10,
            puntiSegnati:32,
            visible:true,
            matches : []
          }
        ],
        searchText: '',
        rimbalziStagione: 10,
        falliStagione: 3,
        puntiSegnatiStagione: 100,
        indicePlayer: 0,
        editStat: {
            read: true,
            update: false
        },
        newMatch: ''
    },
    methods: {
        searchPlayers() {
            // Applico toLoweCase perché...?
            let search = this.searchText.toLowerCase();

            this.players.forEach((element) => {
                if(element.nome.toLowerCase().includes(search)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },
        setActivePlayer(index) {
            this.indicePlayer = index;
        },
        addMatch() {
            console.log(this.newMatch);

            // Cosa succede se invio una stringa vuota?

            this.players[this.indicePlayer].matches.push(this.newMatch);
            this.newMatch = '';
        }
    }
});
