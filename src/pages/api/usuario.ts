import { loginUsuario } from '../../types/usuario'

export default async (req: any, res: any) => {

    const { email, senha, service } = req.body

    switch (service) {
        case 'loginUsuario': {
            const checkLogin = await loginUsuario(email, senha)
            res.json({ result: checkLogin })

            if (checkLogin != null) {
                console.log('Logado')
            } else {
                console.log('Não logado')
            }

            break
        }
    }
}
