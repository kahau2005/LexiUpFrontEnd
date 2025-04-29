"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormErrorMessage from "@/app/components/login/FormErrorMessage";
//import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { loginUser } from '../../redux/apiRequest'
import { useDispatch } from "react-redux";
//import {useNavigate} from 'react-router-dom'
import { useRouter } from "next/navigation";

// Schema validation với Zod
const loginSchema = z.object({
  username: z.string().min(1, "Tên đăng nhập không được để trống!"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

// ✅ Lấy kiểu dữ liệu từ Zod schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });


  const { toast } = useToast()
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {

    const newUser = {
      username: data.username,
      password: data.password
    }
    try {
      await loginUser(newUser, dispatch, () => router.push("/home"));
    } catch {
      toast({
        variant: "destructive",
        title: "Lỗi đăng nhập!",
        description: "Email hoặc mật khẩu không chính xác.",
        action: <ToastAction altText="Thử lại">Thử lại</ToastAction>,
      });
    }
  };

  return (
    <Card className="w-full h-[360px] absolute bottom-0 z-[51] border-none rounded-none">
      <CardHeader>
        <CardTitle className="text-center text-xl">Đăng nhập</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" {...register("username")} placeholder="Nhập email..." />
            
          </div>

          {/* Password Input */}
          <div>
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" type="password" {...register("password")} placeholder="Nhập mật khẩu..."  />
            <FormErrorMessage message={errors.password?.message} />
          </div>

          {/* Button */}
          <Button type="submit" className="w-full" /*disabled={loading}*/>
            {/* {loading ? "Đang đăng nhập..." : "Đăng nhập"} */}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}