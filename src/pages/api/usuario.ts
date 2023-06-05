import { loginUsuario } from '@/types/usuario'

export default async (req: any, res: any) => {

    const { nome, email, senha, service } = req.body

    if (service) {
        switch (service) {
            case 'loginUsuario': {
                const usuario = await loginUsuario(email, senha)

                if (usuario) {
                    res.json({ result: 'Cliente encontrado.' })
                } else {
                    res.json({ error: 'Cliente não encontrado.' })
                }
                break;
            }
        }
    } else {
        res.json({ error: 'Error' })
    }
}
