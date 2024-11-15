import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../environments/environment";

@Injectable()
export default class ServiceCubos {

  constructor() { }

  getCubos(): Promise<any> {
    const request = "api/cubos";
    const url = environment.urlApiCubos + request;

    return axios.get(url).then(response => {
      console.log("💡", response.data);
      return response.data;
    });
  }

  getCubo(id: number): Promise<any> {
    const request = `api/cubos/${id}`;
    const url = environment.urlApiCubos + request;

    return axios.get(url).then(response => {
      console.log("💡", response.data);
      return response.data;
    });
  }

  getMarcas(): Promise<any> {
    const request = "api/cubos/marcas";
    const url = environment.urlApiCubos + request;

    return axios.get(url).then(response => {
      console.log("💡", response.data);
      return response.data;
    });
  }

  getCubosMarca(nombre: string): Promise<any> {
    const request = `api/cubos/cubosmarca/${nombre}`;
    const url = environment.urlApiCubos + request;

    return axios.get(url).then(response => {
      console.log("💡", response.data);
      return response.data;
    });
  }

  getComentarios(idCubo: number): Promise<any> {
    const request = `api/ComentariosCubo/GetComentariosCubo/${idCubo}`;
    const url = environment.urlApiCubos + request;

    return axios.get(url).then(response => {
      console.log("comentarios🛒", response.data);
      return response.data;
    });
  }

  login(usuario: string, contrasena: string): Promise<any> {
    const request = "api/manage/login";
    const url = environment.urlApiCubos + request;

    return axios.post(url, { email: usuario, password: contrasena }).then(response => {
      console.log("login🟩", response.data.response);
      const token = response.data.response;
      localStorage.setItem("token", token);
      return response.data;
    });
  }

  getPerfilUsuario(): Promise<any> {
    const request = "api/manage/perfilusuario";
    const url = environment.urlApiCubos + request;
    const token = localStorage.getItem("token");

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log("perfil🟩", response.data);
      return response.data;
    });
  }

  getCompras(): Promise<any> {
    const request = "api/compra/comprasusuario";
    const url = environment.urlApiCubos + request;
    const token = localStorage.getItem("token");

    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log("compras🛒", response.data);
      return response.data;
    });
  }

  createPedido(idCubo: number): Promise<any> {
    const request = `api/compra/insertarpedido/${idCubo}`;
    const url = environment.urlApiCubos + request;
    const token = localStorage.getItem("token");

    console.log("token⭐: ", token);
    console.log("url: ", url);

    return axios.post(url, "", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log("pedido🛒", response.data);
      return response.data;
    });
  }

  register(nombre: string, email: string, contrasena: string): Promise<any> {
    const request = "api/manage/registrousuario";
    const url = environment.urlApiCubos + request;

    return axios.post(url, {
      idUsuario: 0, // Si el ID se genera automáticamente, podrías eliminar este campo
      nombre: nombre,
      email: email,
      pass: contrasena
    }).then(response => {
      console.log("registro🟩", response.data);
      return response.data;
    });
  }
}
