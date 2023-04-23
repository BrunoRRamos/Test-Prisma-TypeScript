import UserController from "./controllers/UserController";

async function main() {
    const userControl = new UserController;
    
    const user = await userControl.create({
        name: "Bruno",
        email: "teste@gamil.com"
    });

    console.log(user);
}

main();