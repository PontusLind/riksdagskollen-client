export class Ledamot {
    intressentId: string;
    parti: string;
    rm: string;
    ja: number;
    nej: number;
    avstår: number;
    frånvarande: number;
}

export class LedamotProcent {
    intressentId: string;
    parti: string;
    frånvarande: number;
    fornamn: string;
    efternamn: string;
}

export class Parti {
    parti1: string;
    rm: string;
    ja: number;
    nej: number;
    avstår: number;
    frånvarande: number;
}

export class PartiProcent {
    parti: string;
    riksdagsår: string;
    procentFrånvaro: number;
}

export class PersonR {
    personlista: Personlista;
}

class Uppdrag {
    organ_kod: string;
    roll_kod: string;
    ordningsnummer: string;
    status: string;
    typ: string;
    from: string;
    tom: string;
    uppgift: any[];
    intressent_id: string;
    hangar_id: string;
    sortering: string;
    organ_sortering: string;
    uppdrag_rollsortering: string;
    uppdrag_statussortering: string;
}

class Personuppdrag {
    uppdrag: Uppdrag[];
}

class Uppgift {
    kod: string;
    uppgift: any[];
    typ: string;
    intressent_id: string;
    hangar_id: string;
}

class Personuppgift {
    uppgift: Uppgift[];
}

class Person {
    hangar_guid: string;
    sourceid: string;
    intressent_id: string;
    hangar_id: string;
    fodd_ar: string;
    kon: string;
    efternamn: string;
    tilltalsnamn: string;
    sorteringsnamn: string;
    iort: string;
    parti: string;
    valkrets: string;
    status: string;
    person_url_xml: string;
    bild_url_80: string;
    bild_url_192: string;
    bild_url_max: string;
    personuppdrag: Personuppdrag;
    personuppgift: Personuppgift;
}

class Personlista {
    systemdatum: string;
    hits: string;
    person: Person;
}