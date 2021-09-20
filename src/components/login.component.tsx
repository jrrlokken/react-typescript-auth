// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// export default class Login extends Component<Props, State> {
//   validationSchema() {
//     return Yup.object().shape({
//       username: [Yup Schema],
//       password: [Yup Schema],
//     });
//   }

//   handleLogin(formValue: { username: string; password: string }) {
//     const { username, password } = formValue;
//   }

//   render() {
//     const initialValues = {
//       username: "",
//       password: "",
//     };

//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={this.validationSchema}
//         onSubmit={this.handleLogin}
//       >
//         <Form>
//           <div>
//             <label htmlFor="username">Username</label>
//             <Field name="username" type="text" />
//             <ErrorMessage name="username" component="div" />
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <Field name="password" type="password" />
//             <ErrorMessage name="password" component="div" />
//           </div>

//           <div>
//             <button type="submit" disabled={loading}>
//               Login
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     );
//   }
// }

import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AuthService from "../services/auth.service";

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  username: string,
  password: string,
  loading: boolean,
  message: string
};

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required("This field is required."),
      password: Yup.string().required("This field is required.");
    });
  }

  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue;

    this.setState({
      message: "",
      loading: true
    });
  }
}