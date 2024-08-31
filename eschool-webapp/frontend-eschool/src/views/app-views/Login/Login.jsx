import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, Button, Modal, Checkbox } from 'antd';
import LoginFormImg from "../../../assets/login-form-bg.jpg";
import './Login.scss';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Please input your email!'),
  password: yup.string().required('Please input your password!'),
});

const registerSchema = yup.object().shape({
  name: yup.string().required('Please input your name!'),
  email: yup.string().email('Invalid email').required('Please input your email!'),
  phoneNumber: yup.string().required('Please input your phone number!'),
  schoolName: yup.string().required('Please input your school name!'),
  location: yup.string().required('Please input your location!'),
  schoolStrength: yup.number().required('Please input your school strength!'),
  tnc: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { control: registerControl, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onRegisterSubmit = (data) => {
    console.log(data);
    setIsModalVisible(false);
    // Here you would send the data to the backend register API
  };

  const showRegisterModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-image">
          <img src={LoginFormImg} alt="Login Illustration" />
        </div>
        <div className="form-content">
          <h1 className="title">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    status={errors.email ? 'error' : ''}
                    placeholder="Email"
                  />
                )}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-item">
              <label>Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    status={errors.password ? 'error' : ''}
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <Button className='login-btn' htmlType="submit" block>
              Log in
            </Button>
            <div className="additional-links">
              <span className="forgot-password" onClick={showRegisterModal}>
                Create an Account
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Register New User Modal */}
      <Modal
        title="Register New User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="register-modal"
      >
        <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
          <div className="form-item">
            <label>Name</label>
            <Controller
              name="name"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.name ? 'error' : ''}
                  placeholder="Name"
                />
              )}
            />
            {registerErrors.name && <p className="error-message">{registerErrors.name.message}</p>}
          </div>
          <div className="form-item">
            <label>Email</label>
            <Controller
              name="email"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.email ? 'error' : ''}
                  placeholder="Email"
                />
              )}
            />
            {registerErrors.email && <p className="error-message">{registerErrors.email.message}</p>}
          </div>
          <div className="form-item">
            <label>Phone Number</label>
            <Controller
              name="phoneNumber"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.phoneNumber ? 'error' : ''}
                  placeholder="Phone Number"
                />
              )}
            />
            {registerErrors.phoneNumber && <p className="error-message">{registerErrors.phoneNumber.message}</p>}
          </div>
          <div className="form-item">
            <label>School Name</label>
            <Controller
              name="schoolName"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.schoolName ? 'error' : ''}
                  placeholder="School Name"
                />
              )}
            />
            {registerErrors.schoolName && <p className="error-message">{registerErrors.schoolName.message}</p>}
          </div>
          <div className="form-item">
            <label>Location</label>
            <Controller
              name="location"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.location ? 'error' : ''}
                  placeholder="Location"
                />
              )}
            />
            {registerErrors.location && <p className="error-message">{registerErrors.location.message}</p>}
          </div>
          <div className="form-item">
            <label>School Strength</label>
            <Controller
              name="schoolStrength"
              control={registerControl}
              render={({ field }) => (
                <Input
                  {...field}
                  status={registerErrors.schoolStrength ? 'error' : ''}
                  placeholder="School Strength"
                  type="number"
                />
              )}
            />
            {registerErrors.schoolStrength && <p className="error-message">{registerErrors.schoolStrength.message}</p>}
          </div>
          <div className="form-item">
            <Controller
              name="tnc"
              control={registerControl}
              render={({ field }) => (
                <Checkbox {...field}>
                  I agree with the terms and conditions
                </Checkbox>
              )}
            />
            {registerErrors.tnc && <p className="error-message">{registerErrors.tnc.message}</p>}
          </div>
          <Button className='register-btn' htmlType="submit" block>
            Register
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
