"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useState } from "react";

export default function Login() {
  // DECLARATION
  const router = useRouter();

  //STATES
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // FUNCTIONS
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value as string });
  };

  const validateStep = (): boolean => {
    const currentErrors: { [key: string]: string } = {};
    if (!formData.username || formData.username.length < 3)
      currentErrors.username = "Username is required";

    if (!formData.password || formData.password.length < 6)
      currentErrors.password = "Password must be at least 6 characters.";
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateStep()) {
      setLoading(true);
      try {
        const response = await signIn("credentials", {
          ...formData,
          redirect: false,
        });
        if (response?.error) {
          setLoading(false);
          setError("credentials does not match");
        } else if (response?.ok) {
          setLoading(false);
          router.push("/admin");
        }
      } catch (error) {
        setLoading(false);
        console.error("Login error:", error);
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="enroll">
      <div className="enroll-header">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            quality={100}
          />
        </Link>
      </div>

      <div className="enroll-welcome">
        <h2>DanielBlac Devhub</h2>
        <p>Enter details to login.</p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <TextField
              fullWidth
              label="Username"
              name="username"
              color="secondary"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginTop: "-2em" }}
              color="secondary"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {errors.password && (
              <Typography
                sx={{
                  marginTop: "-2.4em",
                  color: "#d32f2f",
                  marginLeft: "1.2em",
                  fontSize: "0.75rem",
                }}
              >
                {errors.password}
              </Typography>
            )}
            {error && (
              <Typography
                sx={{
                  marginTop: "-2.4em",
                  color: "#d32f2f",
                  marginLeft: "1.2em",
                  fontSize: "0.75rem",
                }}
              >
                {error}
              </Typography>
            )}
            <p
              className="forget-password"
              // onClick={() => {
              //   router.push("/forgot_password");
              // }}
            >
              FORGOT PASSWORD
            </p>

            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#e76b1f" }}
            >
              {loading ? (
                <CircularProgress color="inherit" size={25} thickness={5} />
              ) : (
                <Typography color="white">LOG IN</Typography>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
