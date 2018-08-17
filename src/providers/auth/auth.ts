import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


  constructor(private angularFireAuth: AngularFireAuth) {
  }

  /** PROBANDO EL GIT
   * Método que hace la transaccion para el inicio de sesión en la aplicación.
   * @param email, email con el que se iniciara sesion
   * @param password Contraseña con la que se efectuara el inicio de sesión.
   */
  login(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Método que hace la transaccion para registrarse en la aplicación.
   * @param email, email con el que se iniciara sesion
   * @param password Contraseña con la que se efectuara el inicio de sesión.
   */
  signup(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Método empleado para obtener el estado del usuario en sesión.
   */
  getStatus(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      return user
    });
  }

}
