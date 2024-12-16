import React, { ReactElement, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
import CheckboxModal from "./checkbox";
import { Button } from "@/ui/buttons/Button";
import { CloseIcon } from "@/ui/icons/CloseIcon";
import axios from "axios";

const ModalCall = ({ children }: { children: ReactElement }) => {
  const [activeCheck, setActiveCheck] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    activeCheck: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const validate = () => {
    const newErrors = { name: "", phone: "", activeCheck: "" };

    // Проверка поля "Имя"
    if (!formData.name.trim()) {
      newErrors.name = "Имя не должно быть пустым.";
    }

    // Проверка поля "Телефон"
    const phoneRegex = /^[+]?[0-9\s\-()]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон не должен быть пустым.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона.";
    }
    if (!activeCheck) {
      newErrors.activeCheck = "Обязательное поле";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("/api/send-email", formData);
        setFormData({ name: "", phone: "" }); // Очистка формы
        setErrors({ name: "", phone: "", activeCheck: "" }); // Очистка ошибок
        setIsSuccess(true);
      } catch (error: any) {
        console.log(error);
      }
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {isSuccess ? (
            <>
              <Dialog.Title className="DialogTitle">
                Данные отправлены, наш специалист скоро с вами свяжется
              </Dialog.Title>
              <Button
                onClick={() => setIsSuccess(false)}
                buttonType="submit"
                type="formDefault"
                styleBtn="Button"
                disabled={!activeCheck}
              >
                Изменить введенные данные
              </Button>
            </>
          ) : (
            <>
              <Dialog.Title className="DialogTitle">
                Заказать обратный звонок
              </Dialog.Title>
              <Dialog.Description className="DialogDescription">
                Оставьте свой номер телефона и мы перезвоним вам в ближайшее
                время
              </Dialog.Description>
              <form className="Form" action="" onSubmit={handleSubmit}>
                <fieldset className="Fieldset">
                  <input
                    value={formData.name}
                    className="Input"
                    id="name"
                    placeholder="Имя"
                    onChange={handleChange}
                  />
                  {errors.name && <p className="Error">{errors.name}</p>}
                  <input
                    value={formData.phone}
                    className="Input"
                    id="phone"
                    placeholder="Телефон"
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="Error">{errors.phone}</p>}
                </fieldset>
                <CheckboxModal
                  setActiveCheck={setActiveCheck}
                  activeCheck={activeCheck}
                />
                {errors.activeCheck && (
                  <p className="Error">{errors.activeCheck}</p>
                )}
                <div
                  style={{
                    display: "flex",
                    marginTop: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <div className="Buttons">
                    <Button
                      buttonType="submit"
                      type="formDefault"
                      styleBtn="Button"
                      disabled={!activeCheck}
                    >
                      Отправить заявку
                    </Button>
                    <Dialog.Close asChild>
                      <Button type="formTransparent" styleBtn="Button">
                        Отменить
                      </Button>
                    </Dialog.Close>
                  </div>
                </div>
              </form>
            </>
          )}

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <CloseIcon size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalCall;
