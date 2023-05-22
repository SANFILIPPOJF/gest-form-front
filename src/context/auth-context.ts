import { createContext } from "react";
import { User } from "../types/user_type";
import { DEFAULT_USER } from "../constants/default_user";
import { DEFAULT_RESIDENCE } from "../constants/default_residence";
import { Residence } from "../types/residence_type";
import { DEFAULT_FONCTION } from "../constants/default_fonction";
import { Fonction } from "../types/fonction_type";
import { DEFAULT_SALLE } from "../constants/default_salle";
import { Salle } from "../types/salle_type";
import { DEFAULT_FORMTYPE } from "../constants/default_formtype";
import { FormationType } from "../types/form-type_type";

export const AuthContext = createContext({
    type: DEFAULT_FORMTYPE,
    types: [DEFAULT_FORMTYPE],
    salle: DEFAULT_SALLE,
    salles: [DEFAULT_SALLE],
    connected: DEFAULT_USER,
    user: DEFAULT_USER,
    users: [DEFAULT_USER],
    residence: DEFAULT_RESIDENCE,
    residences: [DEFAULT_RESIDENCE],
    fonction: DEFAULT_FONCTION,
    fonctions: [DEFAULT_FONCTION],
    reload: false,
    setType: (value: FormationType) => {},
    setTypes: (value: FormationType[]) => {},
    setSalle: (value: Salle) => {},
    setSalles: (value: Salle[]) => {},
    setConnected: (value: User) => {},
    setReload: (value: boolean) => {},
    setFonction: (value: Fonction) => {},
    setFonctions: (value: Fonction[]) => {},
    setResidence: (value: Residence) => {},
    setResidences: (value: Residence[]) => {},
    setUsers: (value: User[]) => {},
    setUser: (value: User) => {}
});