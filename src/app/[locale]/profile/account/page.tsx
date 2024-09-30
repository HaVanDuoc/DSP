"use client";

import React, { useState } from "react";
import {
  Avatar,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { Mail, Phone } from "@/config/icons";
import { COUNTRY, GENDER, USER } from "@/data";
import { parseDate } from "@internationalized/date";
import { IUser } from "@/models";
import { Controller, useForm } from "react-hook-form";
import { convertBirthdayToString } from "@/utils";
import AppContainer from "@/components/common/AppContainer";
import UploadAvatar from "@/components/profile/account/UploadAvatar";
import SecuritySection from "@/components/profile/account/SecuritySection";
import SocialNetworkSection from "@/components/profile/account/SocialNetworkSection";
import RankSection from "@/components/profile/account/RankSection";

const AccountPage = () => {
  const [user, setUser] = useState<IUser>(USER);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.fullName,
      nickname: user?.nickname,
      birthday: parseDate(user?.birthday ?? ""),
      gender: user?.gender,
      country: user?.country ?? "",
      phoneNumber: user?.phoneNumber,
      email: user?.email,
    },
  });

  return (
    <AppContainer>
      <div className="flex flex-row text-black sm:text-base text-sm gap-10">
        <div className="flex flex-col w-full gap-7">
          <div className="hidden sm:block font-bold px-5">
            Thông tin cá nhân
          </div>

          <form
            onSubmit={handleSubmit((data) => {
              const update = {
                ...data,
                birthday: convertBirthdayToString(data.birthday),
              };
              console.log("update", update);
            })}
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-5  ">
              <div className="flex flex-col gap-7 sm:p-5 lg:border-r lg:border-r-black">
                {/* Avatar */}
                <div className="grid grid-cols-[auto_1fr] text-sm gap-3 items-center ">
                  <div className="row-span-2 mr-3 flex justify-center items-center">
                    <UploadAvatar avatar={user?.avatar} userId={user?.id} />
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-4">
                    <div className="text-nowrap font-bold">Họ tên</div>
                    <Input
                      {...register("fullName", {
                        value: user?.fullName,
                        required: "*Bắt buộc",
                        maxLength: {
                          value: 50,
                          message: "Không quá 50 ký tự!",
                        },
                      })}
                      isInvalid={!!errors.fullName}
                      errorMessage={errors.fullName?.message || ""}
                      variant="bordered"
                      fullWidth
                      size="sm"
                    />
                    <div className="text-nowrap font-bold">Nickname</div>
                    <Input
                      {...register("nickname", {
                        value: user?.nickname,
                        required: "*Bắt buộc",
                        maxLength: {
                          value: 50,
                          message: "Không quá 50 ký tự!",
                        },
                      })}
                      isInvalid={!!errors.nickname}
                      errorMessage={errors.nickname?.message || ""}
                      variant="bordered"
                      fullWidth
                      size="sm"
                    />
                  </div>
                </div>

                {/* Ngày sinh */}
                <div className="flex flex-col sm:flex-row gap-5 item-start sm:items-center">
                  <div className="text-nowrap font-bold">Ngày sinh</div>
                  <Controller
                    name="birthday"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <DatePicker
                        aria-label="date-picker-birthday"
                        showMonthAndYearPickers
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>

                {/* Giới tính */}
                <div className="flex flex-row  gap-5 items-center">
                  <div className="text-nowrap font-bold">Giới tính</div>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup
                        orientation="horizontal"
                        label=""
                        aria-label="gender-radio"
                        value={value}
                        onChange={onChange}
                      >
                        {GENDER.map((g) => (
                          <Radio value={g.type} key={g.type}>
                            {g.type}
                          </Radio>
                        ))}
                      </RadioGroup>
                    )}
                  />
                </div>

                {/* Quốc tịch */}
                <div className="flex flex-row gap-5 items-center">
                  <div className="text-nowrap font-bold">Quốc tịch</div>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        aria-label="country"
                        variant="bordered"
                        selectedKeys={[value]}
                        onChange={(selected) => {
                          const country = selected.target.value;
                          onChange(country); // Cập nhật giá trị khi chọn quốc tịch
                        }}
                      >
                        {COUNTRY.map((country) => (
                          <SelectItem
                            key={country.key}
                            startContent={
                              <Avatar
                                alt={country.name}
                                className="w-6 h-6"
                                src={country.flag}
                              />
                            }
                          >
                            {country.name}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  color="warning"
                  className="text-white text-sm"
                >
                  Lưu thay đổi
                </Button>
              </div>

              <div className="flex flex-col gap-5 sm:p-5 text-sm">
                {/* Số điện thoại và Email */}
                <div className="flex flex-col gap-3">
                  <div className="text-base font-bold">
                    Số điện thoại và Email
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-6">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center ">
                      <div className="hidden sm:block">
                        <Phone size={18} />
                      </div>
                      <div className="font-bold text-nowrap">Số điện thoại</div>
                      <div className="text-sm text-nowrap sm:hidden">
                        {user?.phoneNumber && user?.phoneNumber !== ""
                          ? user?.phoneNumber
                          : "Thêm số điện thoại"}
                      </div>
                    </div>
                    <Input
                      {...register("phoneNumber", {
                        value: user?.phoneNumber,
                        required: "*Số điện thoại là bắt buộc",
                        pattern: {
                          value: /^\+?[0-9\s-]{10,15}$/,
                          message: "*Số điện thoại không hợp lệ",
                        },
                      })}
                      isInvalid={!!errors.phoneNumber}
                      errorMessage={errors.phoneNumber?.message || ""}
                      variant="bordered"
                      fullWidth
                      className="hidden sm:block"
                      size="sm"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                            e.key
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />

                    <Button
                      variant="bordered"
                      size="sm"
                      className="w-[110px] justify-self-end  border-black font-bold sm:hidden"
                    >
                      Cập nhật
                    </Button>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center">
                      <div className="hidden sm:block">
                        <Mail size={18} />
                      </div>
                      <div className="font-bold text-nowrap">Địa chỉ email</div>
                      <div className="text-sm text-nowrap sm:hidden">
                        {user?.email && user?.email !== ""
                          ? user?.email
                          : "Thêm địa chỉ email"}
                      </div>
                    </div>
                    <Input
                      {...register("email", {
                        value: user?.email,
                        required: "Email là bắt buộc",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, // Mẫu kiểm tra định dạng email
                          message: "Email không hợp lệ",
                        },
                      })}
                      isInvalid={!!errors.email}
                      errorMessage={errors.email?.message || ""}
                      fullWidth
                      size="sm"
                      variant="bordered"
                      className="hidden sm:block"
                    />

                    <Button
                      variant="bordered"
                      size="sm"
                      className="w-[110px] justify-self-end  border-black font-bold sm:hidden"
                    >
                      Cập nhật
                    </Button>
                  </div>
                </div>

                <SecuritySection />
                <SocialNetworkSection />
              </div>

              <RankSection />
            </div>
          </form>
        </div>
      </div>
    </AppContainer>
  );
};

export default AccountPage;
