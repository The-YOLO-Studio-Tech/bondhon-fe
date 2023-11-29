// import { NextAuthOptions,  } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import authCredentialsLogin from './authCredentialsLogin';
// import refreshAccessToken from './refreshAccessToken';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Bandhon',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(_credentials: any, request: any) {
        try {
          const { username, password } = request.body;
          if (username == 'bandhon' && password == 'bandhon1234#') {
            const user = {
              // id: "1",
              username,
            };
            return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  site: process.env.NEXTAUTH_URL,
  secret: process.env.JWT_SICRECT_KEY,
  // pages: {
  //   signIn: "/login",
  //   signOut: "/auth/signout",
  //   error: "/login", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};
