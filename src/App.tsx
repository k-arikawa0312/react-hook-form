import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
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
          {...register("name", { required: "名前は必須です" })}
        />
        <p>{errors.name?.message as React.ReactNode}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="パスワード">パスワード</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
