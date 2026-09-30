# Leads Polo UniFECAF

Painel de follow-up de leads e pós-matrícula do polo. Site estático (GitHub Pages) com dados no Firebase (Firestore) e login por e-mail e senha.

## Arquivos

- `index.html` — o painel inteiro.
- `config.js` — configuração do Firebase e e-mail da administradora.
- `firestore.rules` — quem pode ler e alterar os dados. Cópia de referência: a regra que vale é a publicada no Firebase.

## Configuração (uma vez)

1. **Firebase**: em console.firebase.google.com, crie o projeto e adicione um app **Web**. Copie o objeto `firebaseConfig` para `FIREBASE_CONFIG` no `config.js`.
2. **Login**: Authentication → Método de login → ative **E-mail/senha**. Em Usuários, crie o login da administradora.
3. **Banco**: Firestore Database → Criar banco → modo de produção → região `southamerica-east1 (São Paulo)`.
4. **Regras**: Firestore → Regras → cole o conteúdo de `firestore.rules`, troque o e-mail da administradora e clique em Publicar. No `config.js`, coloque o mesmo e-mail em `ADMIN_EMAILS`.
5. **Domínio**: Authentication → Configurações → Domínios autorizados → adicione `SEU-USUARIO.github.io`.
6. **GitHub Pages**: Settings → Pages → Deploy from a branch → `main` / raiz.

## Dia a dia

- Nova vendedora: adicione na aba **Equipe** do site (nome + e-mail). No primeiro acesso ela clica em **Primeiro acesso: criar minha senha** com esse e-mail.
- Alguém saiu: clique em **Desativar** na aba Equipe. Os leads dela passam para outra vendedora e o acesso é cortado na hora.
- A configuração do Firebase no `config.js` não é segredo; quem protege os dados são as regras.
