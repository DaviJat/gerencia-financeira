import { query } from '@/lib/db'

export async function loginUsuario(email: string, senha: string) {

    const usuario = await query({
        query: "SELECT * FROM usuario WHERE usuario.email = (?) AND usuario.senha = (?)",
        values: [email, senha]
    })

    if (Object.keys(usuario).length > 0) {
        return usuario
    } else {
        return null
    }
}
