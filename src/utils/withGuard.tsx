import { useSelector } from "react-redux";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withGuard = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const Wrapper: React.FC<P> = (props): ReactElement => {
    const navigate = useNavigate();
    const isLoggedIn: boolean = useSelector(
      (state: any) => state.auth.isLoggedIn
    );

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/home");
      }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? <Component {...(props as P)} /> : <></>;
  };

  return Wrapper;
};

export default withGuard;
