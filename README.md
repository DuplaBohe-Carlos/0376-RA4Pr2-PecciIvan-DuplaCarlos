# **1. Reconeix la utilitat de les aplicacions d’ofimàtica web**

## **Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**
    GitHub és una plataforma accessible des del navegador que permet a múltiples usuaris treballar simultàniament sobre un mateix projecte.
## **Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d’un projecte només en un ordinador local?**
    El codi està emmagatzemat al núvol, accessible des de qualsevol lloc i dispositiu en cualsevol moment
## **Com pot ajudar GitHub a gestionar versions d’un projecte web o d’una aplicació?**
    GitHub guarda un registre de cada (commit) amb data, autor i descripció. Això permet tornar a qualsevol versió anterior del projecte, comparar diferències entre versions.
## **En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**
    És útil en projectes de desenvolupament de programari, pàgines web.
## **Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d’emmagatzematge de fitxers?**
    Git:Guarda l'historial complet de canvis. sistema tradicional d’emmagatzematge:Només guarda l'estat actual del fitxer
# 2. **Classifica segons la funcionalitat i prestacions específiques**

## **Explica quina és la diferència entre Git i GitHub.**
    Git: es un sistema de control de versions que s'executa localment a l'ordinador.

    GitHub: es una plataforma web que allotja repositoris Git al núvol.
## **Quines funcionalitats ofereix GitHub a més del control de versions del codi?**
   **Issues:**gestió de tasques, errors i millores.
   **Pull Requests:**revisió de codi abans de fusionar canvis.
   **Wiki:**documentació integrada al repositori.
## **Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**
**repositoris:**Espais d'emmagatzematge on es guarda tot el codi, fitxers i historial d'un projecte.
**issues:**Sistema de seguiment de tasques, errors o propostes de millora.
**pull requests:**Sol·licituds per integrar els canvis d'una branca a una altra.
**GitHub Pages:**Servei que permet publicar llocs web estàtics directament des d'un repositori de GitHub de forma gratuïta, accessible amb una URL pública.

## **Quina funció tenen les branques (branches) en Git?**
    Les branques permeten treballar en funcionalitats o correccions de forma aïllada sense afectar el codi principal (main)
## **Per a què serveixen les pull requests en un projecte col·laboratiu?**
    Les pull requests serveixen per proposar la integració dels canvis d'una branca a una altra de forma controlada.
# **3. Gestiona els comptes d’usuari**
    
## **Què és un compte d’usuari a GitHub i per què és necessari per treballar amb repositoris remots?**
    Un compte d'usuari a GitHub és un perfil personal que identifica una persona a la plataforma. És necessari per poder crear repositoris, fer commits, clonar repositoris privats, col·laborar en projectes i gestionar permisos.
## **Quina diferència hi ha entre un repositori públic i un privat a GitHub?**
**repositori public:**Qualsevol persona pot veure i clonar el codi, però només els col·laboradors autoritzats poden modificar-lo.
**Repositori privat:**Només el propietari i els col·laboradors convidats poden veure i accedir al contingut. 
## **Com es pot afegir un col·laborador a un repositori de GitHub?**
   **1.-**Anar al repositori a GitHub.
   **2.-**Clicar a Settings.
   **3.-**Al menú lateral, seleccionar Collaborators.
   **4.-**Clicar a Add people i cercar el nom d'usuari o correu electrònic.
   **5.-**L'usuari rebrà una invitació que haurà d'acceptar.
## **Quins rols o permisos pot tenir un usuari dins d’un repositori?**
**Admin:** Accés complet, inclosa la configuració i eliminació del repositori.
**Write:**Pot fer push de canvis al repositori.
**Read:**Pot veure i clonar el repositori, però no modificar-lo.
## **Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**
    Una gestió incorrecta dels permisos pot permetre que usuaris no autoritzats modifiquin o eliminin codi
# 4. **Aplica criteris de seguretat en l’accés dels usuaris**
    
## **Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**
    Qualsevol usuari podria eliminar o sobreescriure codi important.
    Exposició d'informació sensible a persones no autoritzades.
## **Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**
    Les contrasenyes convencionals poden ser interceptades o robades. Els tokens d'accés personal (PAT) i les claus SSH ofereixen una autenticació més segura perquè no transmeten la contrasenya directament ja que la encripten.
## **Què passaria si es publiquen contrasenyes o claus privades dins d’un repositori?**
    Qualsevol persona amb accés al repositori (o tot internet si és públic) podria fer servir aquestes credencials per accedir.
## **Quines bones pràctiques de seguretat s’han de seguir quan es treballa amb GitHub?**
    - Mai pujar contrasenyes, tokens o claus API al repositori.
    - Activar l'autenticació en dos factors (2FA) al compte de GitHub.
## **Per què és important controlar qui pot fer push directament a la branca principal (main)?**
    - La branca main conté el codi estable i en producció.
# 5. **Utilitza les aplicacions de forma cooperativa**

## **Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**
    - Cada membre de l'equip clona el repositori al seu ordinador, crea una branca pròpia per a la seva tasca i desenvolupa els canvis de forma independent. Quan el treball està llest, obre una pull request perquè la resta de l'equip la revisi. Un cop aprovada, es fusiona a la branca principal.
## **Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**
    - Treballar amb branques permet desenvolupar noves funcionalitats o corregir errors de forma aïllada, sense risc de trencar el codi estable de la branca main.
# 6. **Elabora documentació relativa a l’ús i la gestió de les aplicacions**
    
## **Per què és important incloure un fitxer README.md en un repositori de GitHub?**
    - El README.md és la primera cosa que veu qualsevol persona que visita el repositori. Explica de què tracta el projecte, com instal·lar-lo, com utilitzar-lo.
## **Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**
    - Permet afegir títols, llistes, taules, codi, imatges i enllaços fàcilment.
    - Permet mantenir la documentació versionada juntament amb el codi.
## **Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**
- Una bona documentació redueix el temps necessari per entendre el projecte, explica com configurar l'entorn de desenvolupament, descriu l'estructura del codi i les decisions de disseny.