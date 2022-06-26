export const auth0ClientConfig = {
    domain: process.env.NEXT_PUBLIC_AUTHDOMAIN!,
    clientId: process.env.NEXT_PUBLIC_AUTHCLIENTID!,
    redirectUri: process.env.NEXT_PUBLIC_AUTH0REDIRECTURI!
}