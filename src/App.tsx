import "./App.css";
import { useForm } from "react-hook-form";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <div className="form-container">
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "名前は必須です",
            minLength: { value: 3, message: "3文字以上で入力してください" },
          })}
        />
        <p>{errors.name?.message as React.ReactNode}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "emailがありません",
            minLength: { value: 3, message: "3文字以上で入力してください" },
          })}
        />
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "passwordがありません",
            minLength: { value: 3, message: "3文字以上で入力してください" },
          })}
        />
        <p>{errors.password?.message as React.ReactNode}</p>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
