import React from 'react';
import { Amplify } from 'aws-amplify';
import router from 'next/router';
import { signOut } from 'aws-amplify/auth';
import { AccountSettings } from '@aws-amplify/ui-react';
// import './cognitosignin.css';
import { Authenticator, Heading, useTheme, View, Image, Text, Button, useAuthenticator, Link } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {UserProfile1}  from "./userprofile1";
import {useEffect} from "react";

Amplify.configure(awsExports);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  greeting: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'fixed', // Fix the button to the top-left corner
    top: '10px',
    right: '10px',
    zIndex: 10, // Ensure the button stays on top of other elements
  },
};

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Purple Shield logo"
          src="https://gist.githubusercontent.com/HPradhan09/c980b3f109d21e8acd8cdcc1af666f58/raw/136d9df2b532ec915d98de4ca547313a562da2b8/trinity-logo.svg"
          height="50%"
          width="50%"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
        <View textAlign="center" padding={tokens.space.large}>
          <Link href = "https://www.privacypolicies.com/live/c6838b23-d04d-4290-bdcc-4e1f356271ff" color={tokens.colors.purple[80]}> Privacy Policy</Link>
          <Text color={tokens.colors.purple[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {

    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
      order: 1,
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
    },
    confirm_password: {
      label: 'Confirm Password:',
      placeholder: 'Confirm your Password:',
      isRequired: false,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default function Cognitosignout(props) {
  console.log("CognitoSignIn props: ", props);



  useEffect(() => {
    signOut();
    router.push("/signin");
  }, []);

  return (
    <div>Signed Out</div>
  );
}
// export default function App() {
//   return (
//     <Authenticator formFields={formFields} components={components}>
//       {({ signOut, user }) => {
//         console.log(user)
//         console.log(signOut)
//         return (
//         <div style={styles.container}>
//           <button style={styles.button} onClick={signOut}>
//             Sign Out
//           </button>
//           <div style={styles.sidebar}>
//           <Heading level={2} style={styles.greeting}>
//                 Username: {user.signInDetails.loginId}!
//           </Heading>
//             {/* Add your sidebar content here */}
//           </div>
//           <div style={styles.content}>
//               <Heading level={2} style={styles.greeting}>
//                 Username: {user.username}!
//               </Heading>
//             {/* Rest of your content goes here */}
//           </div>
//         </div>
//       )}}
//     </Authenticator>
//   );
// }
