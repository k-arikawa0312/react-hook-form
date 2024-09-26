import { z } from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "名前は必須です" })
    .min(3, { message: "3文字以上で入力してください" }),
  email: z
    .string()
    .nonempty({ message: "メールアドレスは必須です" })
    .email({ message: "メールアドレスが正しくありません" }),
  password: z
    .string()
    .nonempty({ message: "パスワードは必須です" })
    .min(3, { message: "3文字以上で入力してください" }),
});
