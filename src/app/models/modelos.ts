export interface Necesidades {
    _id?: string;
    img: string ;
    titulo: String;
    descripcion: string;
  }

  export interface Servicio {
    _id?: string;
    nombre: string;
  }
  
  export interface Solicitantes {
    _id?: string;
    nombre: string;
    correo: string;
    telefono: string;
    id_servicios: string;
    evidencia: String;
}