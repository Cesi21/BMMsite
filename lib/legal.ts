import type { Locale } from "@/i18n/routing"

export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type LegalDocumentCopy = {
  eyebrow: string
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export const companyLabels: Record<Locale, Record<string, string>> = {
  sl: {
    legalName: "Dolgo ime",
    shortName: "Kratko ime",
    address: "Sedež",
    registrationNumber: "Matična številka",
    vatId: "ID za DDV",
    legalForm: "Pravna oblika",
    activity: "Registrirana glavna dejavnost",
    registry: "Registrski organ",
    phone: "Telefon",
    email: "E-pošta",
    sources: "Javna vira podatkov",
    legalFormValue: "Samostojni podjetnik posameznik",
  },
  en: {
    legalName: "Registered legal name",
    shortName: "Short registered name",
    address: "Registered office",
    registrationNumber: "Registration number",
    vatId: "VAT ID",
    legalForm: "Legal form",
    activity: "Registered primary activity",
    registry: "Registration authority",
    phone: "Telephone",
    email: "Email",
    sources: "Public data sources",
    legalFormValue: "Sole proprietor",
  },
  hr: {
    legalName: "Puni registrirani naziv",
    shortName: "Skraćeni naziv",
    address: "Sjedište",
    registrationNumber: "Matični broj",
    vatId: "PDV ID",
    legalForm: "Pravni oblik",
    activity: "Registrirana glavna djelatnost",
    registry: "Registracijsko tijelo",
    phone: "Telefon",
    email: "E-pošta",
    sources: "Javni izvori podataka",
    legalFormValue: "Samostalni poduzetnik pojedinac",
  },
  de: {
    legalName: "Vollständiger Firmenname",
    shortName: "Kurzname",
    address: "Geschäftssitz",
    registrationNumber: "Registernummer",
    vatId: "USt-IdNr.",
    legalForm: "Rechtsform",
    activity: "Eingetragene Haupttätigkeit",
    registry: "Registerbehörde",
    phone: "Telefon",
    email: "E-Mail",
    sources: "Öffentliche Datenquellen",
    legalFormValue: "Einzelunternehmer",
  },
}

export const legalCopy: Record<Locale, LegalDocumentCopy> = {
  sl: {
    eyebrow: "Transparentni podatki",
    title: "Podatki o podjetju in pravne informacije",
    intro: "Registrski podatki nosilca spletnega mesta ter pojasnila o naravi informacij in povpraševanj na bmm-cesar.si.",
    updated: "Posodobljeno 5. avgusta 2026",
    sections: [
      {
        title: "Namen spletnega mesta",
        paragraphs: [
          "Spletno mesto predstavlja področja dela, način sodelovanja in možnosti za stik z BMM Cesar. Vsebina je splošne informativne narave in sama po sebi ne predstavlja zavezujoče ponudbe.",
        ],
      },
      {
        title: "Povpraševanja in sklenitev posla",
        paragraphs: [
          "Oddaja kontaktnega obrazca ali pošiljanje e-pošte ne pomeni avtomatične sklenitve pogodbe. Obseg, cena, rok in drugi pogoji so zavezujoči šele po izrecnem dogovoru med strankama.",
        ],
      },
      {
        title: "Avtorske pravice",
        paragraphs: [
          "Besedila, postavitev, grafični elementi in izvirne vizualne rešitve na tej strani so zaščiteni. Uporaba ali razmnoževanje vsebine zunaj običajnega ogledovanja je dovoljeno le s predhodnim soglasjem, razen kjer je navedeno drugače.",
        ],
      },
      {
        title: "Točnost informacij in zunanje povezave",
        paragraphs: [
          "Prizadevamo si za točne in aktualne informacije, vendar se lahko podatki, storitve in razpoložljivost spremenijo. Za vsebino in delovanje zunanjih spletnih mest, do katerih vodijo povezave, odgovarjajo njihovi upravljavci.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Transparent company information",
    title: "Company details and legal notice",
    intro: "Registration details for the website operator and information about the nature of content and enquiries on bmm-cesar.si.",
    updated: "Updated 5 August 2026",
    sections: [
      {
        title: "Purpose of the website",
        paragraphs: [
          "This website presents BMM Cesar's work areas, cooperation process and contact options. Its content is general information and does not by itself constitute a binding offer.",
        ],
      },
      {
        title: "Enquiries and agreements",
        paragraphs: [
          "Submitting the contact form or sending an email does not automatically create a contract. Scope, price, timing and other conditions become binding only after explicit agreement between the parties.",
        ],
      },
      {
        title: "Copyright",
        paragraphs: [
          "The text, layout, graphic elements and original visual solutions on this website are protected. Use or reproduction beyond ordinary viewing requires prior permission unless stated otherwise.",
        ],
      },
      {
        title: "Accuracy and external links",
        paragraphs: [
          "We aim to keep information accurate and current, but details, services and availability may change. External websites linked from this site remain the responsibility of their respective operators.",
        ],
      },
    ],
  },
  hr: {
    eyebrow: "Transparentni podaci",
    title: "Podaci o poduzeću i pravne informacije",
    intro: "Registracijski podaci upravitelja stranice te objašnjenja o prirodi sadržaja i upita na bmm-cesar.si.",
    updated: "Ažurirano 5. kolovoza 2026.",
    sections: [
      {
        title: "Svrha web stranice",
        paragraphs: [
          "Stranica predstavlja područja rada, način suradnje i mogućnosti kontakta s BMM Cesar. Sadržaj je opće informativne prirode i sam po sebi ne predstavlja obvezujuću ponudu.",
        ],
      },
      {
        title: "Upiti i sklapanje posla",
        paragraphs: [
          "Slanje kontaktnog obrasca ili e-pošte ne znači automatsko sklapanje ugovora. Opseg, cijena, rok i ostali uvjeti postaju obvezujući tek nakon izričitog dogovora stranaka.",
        ],
      },
      {
        title: "Autorska prava",
        paragraphs: [
          "Tekstovi, raspored, grafički elementi i izvorna vizualna rješenja na ovoj stranici zaštićeni su. Upotreba ili umnožavanje izvan uobičajenog pregledavanja dopušteni su samo uz prethodno odobrenje, osim ako je navedeno drukčije.",
        ],
      },
      {
        title: "Točnost informacija i vanjske poveznice",
        paragraphs: [
          "Nastojimo održavati informacije točnima i ažurnima, ali se podaci, usluge i dostupnost mogu promijeniti. Za sadržaj i rad vanjskih stranica odgovorni su njihovi upravitelji.",
        ],
      },
    ],
  },
  de: {
    eyebrow: "Transparente Unternehmensangaben",
    title: "Unternehmensangaben und rechtliche Hinweise",
    intro: "Registerangaben zum Betreiber sowie Hinweise zum Charakter der Inhalte und Anfragen auf bmm-cesar.si.",
    updated: "Aktualisiert am 5. August 2026",
    sections: [
      {
        title: "Zweck der Website",
        paragraphs: [
          "Diese Website stellt die Arbeitsbereiche, den Ablauf einer Zusammenarbeit und Kontaktmöglichkeiten von BMM Cesar vor. Die Inhalte dienen der allgemeinen Information und stellen für sich allein kein verbindliches Angebot dar.",
        ],
      },
      {
        title: "Anfragen und Vertragsabschluss",
        paragraphs: [
          "Das Absenden des Kontaktformulars oder einer E-Mail führt nicht automatisch zu einem Vertrag. Umfang, Preis, Termine und weitere Bedingungen werden erst durch eine ausdrückliche Vereinbarung der Parteien verbindlich.",
        ],
      },
      {
        title: "Urheberrecht",
        paragraphs: [
          "Texte, Gestaltung, grafische Elemente und eigene visuelle Lösungen dieser Website sind geschützt. Eine Nutzung oder Vervielfältigung über die gewöhnliche Betrachtung hinaus bedarf der vorherigen Zustimmung, sofern nicht anders angegeben.",
        ],
      },
      {
        title: "Richtigkeit und externe Links",
        paragraphs: [
          "Wir bemühen uns um richtige und aktuelle Informationen; Angaben, Leistungen und Verfügbarkeit können sich jedoch ändern. Für Inhalt und Funktion externer verlinkter Websites sind deren jeweilige Betreiber verantwortlich.",
        ],
      },
    ],
  },
}

export const privacyCopy: Record<Locale, LegalDocumentCopy> = {
  sl: {
    eyebrow: "Varstvo osebnih podatkov",
    title: "Politika zasebnosti",
    intro: "To pojasnilo opisuje, katere podatke obdelujemo ob uporabi kontaktnega obrazca, zakaj jih potrebujemo in katere pravice imate.",
    updated: "Posodobljeno 5. avgusta 2026",
    sections: [
      {
        title: "1. Upravljavec podatkov",
        paragraphs: [
          "Upravljavec osebnih podatkov je BMM CESAR, oblaganje tal in sten Blaž Cesar s.p., Ravno 3, 3224 Dobje pri Planini. Za vprašanja o zasebnosti pišite na info@bmm-cesar.si.",
        ],
      },
      {
        title: "2. Katere podatke obdelujemo",
        items: [
          "e-poštni naslov, obvezno vsebino zadeve in sporočila ter izbrano področje povpraševanja;",
          "telefonsko številko, če jo navedete prostovoljno;",
          "osnovne tehnične podatke, potrebne za varnost, omejevanje zlorab in delovanje obrazca, kot je naslov IP za kratkotrajno omejevanje pogostosti zahtevkov.",
        ],
      },
      {
        title: "3. Namen in pravna podlaga",
        paragraphs: [
          "Podatke uporabljamo za obravnavo vašega vprašanja, pripravo odgovora in po potrebi izvedbo korakov pred morebitnim poslovnim dogovorom. Varnostne podatke obdelujemo zaradi zakonitega interesa za zaščito spletnega mesta in preprečevanje zlorab. Kadar obdelava temelji na privolitvi, jo lahko kadarkoli prekličete, ne da bi to vplivalo na zakonitost predhodne obdelave.",
        ],
      },
      {
        title: "4. Ponudniki in prenosi podatkov",
        paragraphs: [
          "Za gostovanje uporabljamo ponudnika infrastrukture, določenega ob objavi spletnega mesta. Za dostavo sporočil kontaktnega obrazca uporabljamo Resend kot obdelovalca. Resend podatke primarno hrani v ZDA in v svojem dodatku o obdelavi podatkov uporablja standardne pogodbene klavzule za prenose iz EGP v ZDA.",
        ],
      },
      {
        title: "5. Čas hrambe",
        paragraphs: [
          "Povpraševanja hranimo toliko časa, kolikor je potrebno za odgovor in nadaljnjo komunikacijo. Če pride do poslovnega sodelovanja ali če hrambo zahtevajo računovodske, davčne oziroma druge zakonske obveznosti, se ustrezni podatki hranijo v rokih, ki jih določa zakon. Varnostni podatki za omejevanje zahtevkov se hranijo kratkotrajno.",
        ],
      },
      {
        title: "6. Vaše pravice",
        items: [
          "dostop do svojih podatkov in njihov popravek;",
          "izbris ali omejitev obdelave, kadar so izpolnjeni pogoji;",
          "prenosljivost podatkov in ugovor obdelavi, kadar je to primerno;",
          "preklic privolitve;",
          "pritožba pri Informacijskem pooblaščencu Republike Slovenije (ip-rs.si).",
        ],
      },
      {
        title: "7. Piškotki in lokalna shramba",
        paragraphs: [
          "Spletno mesto trenutno ne uporablja analitičnih ali oglaševalskih piškotkov. Izbrana svetla ali temna tema se lahko shrani lokalno v vašem brskalniku. Če bodo pozneje dodane analitične ali trženjske tehnologije, bo to pojasnilo pred njihovo uporabo ustrezno posodobljeno, po potrebi pa bo dodana tudi izbira soglasja.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Personal data protection",
    title: "Privacy policy",
    intro: "This notice explains what data we process when you use the contact form, why it is needed and which rights you have.",
    updated: "Updated 5 August 2026",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "The controller is BMM CESAR, oblaganje tal in sten Blaž Cesar s.p., Ravno 3, 3224 Dobje pri Planini, Slovenia. For privacy questions, email info@bmm-cesar.si.",
        ],
      },
      {
        title: "2. Data we process",
        items: [
          "your email address, the required subject and message, and the selected enquiry area;",
          "your telephone number when provided voluntarily;",
          "basic technical information required for security, abuse prevention and form operation, such as an IP address used for short-term request rate limiting.",
        ],
      },
      {
        title: "3. Purpose and legal basis",
        paragraphs: [
          "We use the data to handle your question, prepare a response and, where relevant, take steps before a possible business agreement. Security data is processed on the basis of our legitimate interest in protecting the website and preventing abuse. Where processing relies on consent, you may withdraw it at any time without affecting earlier lawful processing.",
        ],
      },
      {
        title: "4. Providers and international transfers",
        paragraphs: [
          "The website uses the infrastructure provider selected for production hosting. Contact-form email is delivered through Resend as a processor. Resend primarily stores data in the United States and uses Standard Contractual Clauses in its Data Processing Addendum for transfers from the EEA to the US.",
        ],
      },
      {
        title: "5. Retention",
        paragraphs: [
          "Enquiries are retained for as long as needed to answer and continue the conversation. If cooperation follows, or accounting, tax or other legal duties apply, relevant data is retained for the legally required period. Security data used for request limiting is retained only briefly.",
        ],
      },
      {
        title: "6. Your rights",
        items: [
          "access to and correction of your personal data;",
          "erasure or restriction where the legal conditions are met;",
          "data portability and objection where applicable;",
          "withdrawal of consent;",
          "a complaint to the Information Commissioner of the Republic of Slovenia (ip-rs.si).",
        ],
      },
      {
        title: "7. Cookies and local storage",
        paragraphs: [
          "The website currently uses no analytics or advertising cookies. Your light or dark theme preference may be stored locally in your browser. If analytics or marketing technology is introduced later, this notice will be updated before use and a consent choice will be added where required.",
        ],
      },
    ],
  },
  hr: {
    eyebrow: "Zaštita osobnih podataka",
    title: "Pravila privatnosti",
    intro: "Ova obavijest objašnjava koje podatke obrađujemo pri korištenju kontaktnog obrasca, zašto su potrebni i koja prava imate.",
    updated: "Ažurirano 5. kolovoza 2026.",
    sections: [
      {
        title: "1. Voditelj obrade",
        paragraphs: [
          "Voditelj obrade je BMM CESAR, oblaganje tal in sten Blaž Cesar s.p., Ravno 3, 3224 Dobje pri Planini, Slovenija. Za pitanja o privatnosti pišite na info@bmm-cesar.si.",
        ],
      },
      {
        title: "2. Podaci koje obrađujemo",
        items: [
          "adresu e-pošte, obaveznu temu i poruku te odabrano područje upita;",
          "telefonski broj ako ga dobrovoljno navedete;",
          "osnovne tehničke podatke potrebne za sigurnost, sprječavanje zloupotrebe i rad obrasca, poput IP adrese za kratkotrajno ograničavanje učestalosti zahtjeva.",
        ],
      },
      {
        title: "3. Svrha i pravna osnova",
        paragraphs: [
          "Podatke koristimo za obradu pitanja, pripremu odgovora i, prema potrebi, korake prije mogućeg poslovnog dogovora. Sigurnosne podatke obrađujemo na temelju legitimnog interesa za zaštitu stranice i sprječavanje zloupotrebe. Kada se obrada temelji na privoli, možete je povući u bilo kojem trenutku bez utjecaja na prethodnu zakonitu obradu.",
        ],
      },
      {
        title: "4. Pružatelji usluga i prijenosi",
        paragraphs: [
          "Stranica koristi infrastrukturnog pružatelja odabranog za produkcijski hosting. Poruke kontaktnog obrasca dostavljaju se putem Resenda kao izvršitelja obrade. Resend podatke prvenstveno pohranjuje u SAD-u i u dodatku o obradi podataka koristi standardne ugovorne klauzule za prijenose iz EGP-a u SAD.",
        ],
      },
      {
        title: "5. Rok čuvanja",
        paragraphs: [
          "Upite čuvamo koliko je potrebno za odgovor i daljnju komunikaciju. Ako dođe do suradnje ili postoje računovodstvene, porezne ili druge zakonske obveze, relevantni se podaci čuvaju u zakonskim rokovima. Sigurnosni podaci za ograničavanje zahtjeva čuvaju se kratkotrajno.",
        ],
      },
      {
        title: "6. Vaša prava",
        items: [
          "pristup i ispravak osobnih podataka;",
          "brisanje ili ograničenje obrade kada su ispunjeni uvjeti;",
          "prenosivost i prigovor gdje je primjenjivo;",
          "povlačenje privole;",
          "pritužba Informacijskom pooblaščencu Republike Slovenije (ip-rs.si).",
        ],
      },
      {
        title: "7. Kolačići i lokalna pohrana",
        paragraphs: [
          "Stranica trenutačno ne koristi analitičke ni oglašivačke kolačiće. Odabir svijetle ili tamne teme može se lokalno pohraniti u pregledniku. Ako se kasnije uvedu analitičke ili marketinške tehnologije, obavijest će biti ažurirana prije njihove uporabe i, kada je potrebno, dodat će se izbor privole.",
        ],
      },
    ],
  },
  de: {
    eyebrow: "Schutz personenbezogener Daten",
    title: "Datenschutzerklärung",
    intro: "Diese Erklärung beschreibt, welche Daten wir bei Nutzung des Kontaktformulars verarbeiten, wozu sie benötigt werden und welche Rechte Sie haben.",
    updated: "Aktualisiert am 5. August 2026",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher ist BMM CESAR, oblaganje tal in sten Blaž Cesar s.p., Ravno 3, 3224 Dobje pri Planini, Slowenien. Datenschutzanfragen richten Sie an info@bmm-cesar.si.",
        ],
      },
      {
        title: "2. Verarbeitete Daten",
        items: [
          "E-Mail-Adresse, erforderlicher Betreff und Nachricht sowie ausgewählter Anfragebereich;",
          "Telefonnummer, sofern Sie diese freiwillig angeben;",
          "grundlegende technische Daten für Sicherheit, Missbrauchsschutz und Formularbetrieb, etwa die IP-Adresse zur kurzfristigen Begrenzung der Anfragehäufigkeit.",
        ],
      },
      {
        title: "3. Zweck und Rechtsgrundlage",
        paragraphs: [
          "Wir verwenden die Daten zur Bearbeitung Ihrer Frage, zur Antwort und gegebenenfalls für vorvertragliche Schritte. Sicherheitsdaten verarbeiten wir aufgrund unseres berechtigten Interesses am Schutz der Website und an der Missbrauchsvermeidung. Soweit die Verarbeitung auf Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.",
        ],
      },
      {
        title: "4. Dienstleister und internationale Übermittlungen",
        paragraphs: [
          "Die Website nutzt den für das Produktionshosting ausgewählten Infrastrukturanbieter. Nachrichten des Kontaktformulars werden über Resend als Auftragsverarbeiter zugestellt. Resend speichert Daten überwiegend in den USA und verwendet in seinem Auftragsverarbeitungsvertrag Standardvertragsklauseln für Übermittlungen aus dem EWR in die USA.",
        ],
      },
      {
        title: "5. Speicherdauer",
        paragraphs: [
          "Anfragen werden so lange gespeichert, wie dies für Antwort und weitere Kommunikation erforderlich ist. Kommt es zu einer Zusammenarbeit oder bestehen buchhalterische, steuerliche oder andere gesetzliche Pflichten, werden relevante Daten für die gesetzlich vorgeschriebene Dauer gespeichert. Sicherheitsdaten zur Anfragebegrenzung werden nur kurzfristig aufbewahrt.",
        ],
      },
      {
        title: "6. Ihre Rechte",
        items: [
          "Auskunft und Berichtigung;",
          "Löschung oder Einschränkung bei Vorliegen der Voraussetzungen;",
          "Datenübertragbarkeit und Widerspruch, soweit anwendbar;",
          "Widerruf einer Einwilligung;",
          "Beschwerde beim Informationsbeauftragten der Republik Slowenien (ip-rs.si).",
        ],
      },
      {
        title: "7. Cookies und lokale Speicherung",
        paragraphs: [
          "Die Website verwendet derzeit keine Analyse- oder Werbe-Cookies. Ihre Auswahl des hellen oder dunklen Designs kann lokal im Browser gespeichert werden. Werden später Analyse- oder Marketingtechnologien eingeführt, wird diese Erklärung vorab aktualisiert und, soweit erforderlich, eine Einwilligungsauswahl ergänzt.",
        ],
      },
    ],
  },
}
