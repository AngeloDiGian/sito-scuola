interface AltreInfo {
  luogo?: string;
  organizzazione?: string;
  giornoInizio?: string;
  giornoFine?: string;
}

interface ProjectProps {
  titolo: string;
  descrizione: string;
  img?: string;
  AS: string;
  altreInfo: AltreInfo;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "PCTO",
    hash: "#pcto",
  },
  {
    name: "Ed. Civica",
    hash: "#ed-civica",
  },
] as const;

export const pctos: ProjectProps[] = [
  {
    titolo: 'Corso sicurezza "rischio medio"',
    descrizione: 'Corso sulla sicurezza "rischio medio" effettuata a scuola',
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "I.I.S. Ettore Majorana",
      giornoInizio: "07/05/2024",
      giornoFine: "11/05/2024",
    },
  },
  {
    titolo: 'Visita azienda "LFOUNDRY"',
    descrizione:
      "Visita formativa presso l'azienda \"LFOUNDRY\" ad Avezzano, dove abbiamo esplorato l'intero plesso industriale, concentrandoci sulla parte più informatica di essa.",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "I.I.S. Ettore Majorana",
      giornoInizio: "03/04/2024",
      giornoFine: "03/04/2024",
    },
  },
  {
    titolo: 'Visita "SERVER ROOM" del comune di Avezzano',
    descrizione:
      "Visita presso la server room del comune di Avezzano, dove abbiamo analizzato il server e la rete comunale privata del comune.",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "I.I.S. Ettore Majorana",
      giornoInizio: "20/03/2024",
      giornoFine: "20/03/2024",
    },
  },
  {
    titolo: "Futuro Remoto 2023 - Città della Scienza",
    descrizione:
      "Fiera scientifica sulla diffusione della cultura scientifica e tecnologica con decine di eventi, conferenze e laboratori riguardante il settore informatico.",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Napoli",
      organizzazione: "Città della Scienza Napoli",
      giornoInizio: "21/11/2023",
      giornoFine: "21/11/2023",
    },
  },
  {
    titolo: 'Visione film "C\'è ancora un domani"',
    descrizione:
      'Visione del film "C\'è ancora un domani" presso il cinema Astra ad Avezzano',
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "IIS Ettore Majorana",
      giornoInizio: "23/02/2024",
      giornoFine: "23/02/2024",
    },
  },
  {
    titolo: "Partecipazione Internazionali di Tennis",
    descrizione:
      "Partecipazione alle Internazionali di Tennis al Foro Italico per assistere alle diverse gare tennistiche della giornata.",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Roma",
      organizzazione: "I.I.S. Ettore Majorana",
      giornoInizio: "14/05/2024",
      giornoFine: "14/05/2024",
    },
  },
  {
    titolo: 'Teatro Dei Marsi "Sherlock Holmes"',
    descrizione:
      'Visione dello spettacolo "Sherlock Holmes" in inglese al Teatro Dei Marsi',
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "I.I.S. Ettore Majorana",
      giornoInizio: "15/12/2023",
      giornoFine: "15/12/2023",
    },
  },
  {
    titolo: "Teatro pirandeliano",
    descrizione:
      "Visione dello spettacolo/lezione teatrale riguardante alcuni dei più famosi scrittori del Novecento presso il Castello Orsini",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Avezzano",
      organizzazione: "I.I.S. Ettore Majorana",
    },
  },
  {
    titolo: "OPEN DIAG",
    descrizione: "Partecipazione all'Open Day dell'università Sapienza di Roma",
    AS: "2023/2024",
    altreInfo: {
      luogo: "Roma",
      organizzazione: "Università Sapienza",
    },
  },
];

export const edCivica = [
  {
    titolo: "Disuguaglianza Economica - La lotta per l'equità",
    sottotitolo:
      "Relazione sulla disuguaglianza economica e delle possibilità all'interno di una società.",
    descrizione:
      "La disuguaglianza economica indica la distribuzione disuguale delle risorse economiche e delle possibilità all'interno di una società, incluse le differenze di reddito, ricchezza, lavoro, istruzione e accesso alle risorse. Per risolverla, sono necessarie politiche che promuovano l'equità e l'accesso equo alle opportunità economiche.",
    materia: "Matematica",
    download: "",
  },
  {
    titolo: "The Social Dilemma - Relazione",
    sottotitolo:
      "Relazione sul documentario 'The Social Dilemma' che affronta l'impatto dei social sulla società.",
    descrizione:
      "Il documentario 'The Social Dilemma' esplora i lati negativi dell'impatto dei social media sulla società, evidenziando come siano progettati per creare dipendenza e manipolare gli utenti. Ex dirigenti di aziende tecnologiche spiegano come i social network sfruttino le vulnerabilità psicologiche, utilizzando algoritmi per tenere gli utenti incollati allo schermo e diffondere disinformazione e propaganda. Questo crea un dilemma: i social media possono essere strumenti potenti di comunicazione ma anche veicoli di manipolazione e disinformazione. È fondamentale essere consapevoli di questi meccanismi per difendersi e utilizzare i social in modo critico e responsabile.",
    materia: "T.P.S.I.T.",
    download: "",
  },
];
