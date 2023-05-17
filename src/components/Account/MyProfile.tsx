import Input from "../Input";
import React, { memo, useState } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";

const MyProfile = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [lastNameEdit, setLastNameEdit] = useState(false);
  const [firstNameEdit, setFirstNameEdit] = useState(false);

  const inputs = [
    {
      value: firstName,
      onChange: (text: string) => setFirstName(text),
      type: "default",
      title: "First Name",
      disabled: firstNameEdit,
      setDisabled: setFirstNameEdit,
    },
    {
      value: lastName,
      onChange: (text: string) => setLastName(text),
      type: "default",
      title: "Last Name",
      disabled: lastNameEdit,
      setDisabled: setLastNameEdit,
    },
    {
      value: email,
      onChange: (text: string) => setEmail(text),
      type: "email-address",
      title: "Email Address",
      disabled: emailEdit,
      setDisabled: setEmailEdit,
    },
    {
      value: phone,
      onChange: (text: string) => setPhone(text),
      type: "phone-pad",
      title: "Phone Number",
      disabled: phoneEdit,
      setDisabled: setPhoneEdit,
    },
    {
      value: password,
      onChange: (text: string) => setPassword(text),
      title: "Password",
      disabled: passwordEdit,
      setDisabled: setPasswordEdit,
    },
  ];
  return (
    <ScrollView className="flex-1 relative pb-bottom px-[20px] pt-[20px]">
      <View className="border-b border-[#848484] py-[15px]">
        <Text className="font-semibold text-[15px]">Temuujin Erdene</Text>
      </View>

      <>
        <View className="flex-row justify-between items-center my-[10px]">
          <Text className="text-[12px] font-medium">Contact Details</Text>
          <View className="flex-row items-center gap-[7px]">
            <Pressable className="py-[5px] px-[20px] rounded-[20px] border-red-primary border-[1.5px]">
              <Text className="text-red-primary text-[12px]">Save</Text>
            </Pressable>
            <Pressable className="py-[5px] px-[20px] rounded-[20px] border-red-primary border-[1.5px]">
              <Text className="text-red-primary text-[12px]">Modify</Text>
            </Pressable>
          </View>
        </View>
        {/* secureTextEntry */}
        <>
          {inputs.map((el, idx) => {
            const { value, onChange, type, title, disabled, setDisabled } = el;
            if (title === "Password")
              return (
                <View className="mt-[10px]" key={idx}>
                  <View>
                    <View className="flex-row justify-between items-center">
                      <Text className="font-medium text-[14px]">{title}</Text>
                      <Pressable
                        onPress={() => {
                          setDisabled(!disabled);
                        }}
                      >
                        <Image
                          source={require("../../assets/edit.png")}
                          className={`w-[25px] h-[25px]`}
                        />
                      </Pressable>
                    </View>
                    <Input
                      value={value}
                      onChange={onChange}
                      disabled={disabled}
                      secureTextEntry
                    />
                  </View>
                </View>
              );

            return (
              <View className="mt-[10px]" key={idx}>
                <View>
                  <View className="flex-row justify-between items-center">
                    <Text className="font-medium text-[14px]">{title}</Text>
                    <Pressable
                      onPress={() => {
                        setDisabled(!disabled);
                      }}
                    >
                      <Image
                        source={require("../../assets/edit.png")}
                        className={`w-[25px] h-[25px]`}
                      />
                    </Pressable>
                  </View>
                  <Input
                    value={value}
                    type={type}
                    onChange={onChange}
                    disabled={disabled}
                  />
                </View>
              </View>
            );
          })}
        </>
      </>

      <>
        <View className="flex-row justify-between items-center mt-[30px]">
          <Text className="text-[12px] font-medium">Saved Payment Methods</Text>
          <View className="flex-row items-center gap-[7px]">
            <Pressable className="py-[5px] px-[20px] rounded-[20px] border-red-primary border-[1.5px]">
              <Text className="text-red-primary text-[12px]">
                + Add Payment Methods
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    </ScrollView>
  );
};

export default memo(MyProfile);
