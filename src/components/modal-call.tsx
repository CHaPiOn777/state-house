import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import CheckboxModal from "./checkbox";
import { Button } from "@/ui/buttons/Button";
import { CloseIcon } from "@/ui/icons/CloseIcon";

const ModalCall = ({ children }) => {
  console.log(children);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            Заказать обратный звонок
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Оставьте свой номер телефона и мы перезвоним вам в ближайшее время
          </Dialog.Description>
          <form className="Form" action="">
            <fieldset className="Fieldset">
              <input className="Input" id="name" placeholder="Имя" />
              <input className="Input" id="username" placeholder="Телефон" />
              <CheckboxModal />
            </fieldset>
          </form>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <div className="Buttons">
              <Button type="formDefault" styleBtn="Button">
                Отправить заявку
              </Button>
              <Button type="formTransparent" styleBtn="Button">
                Отменить
              </Button>
            </div>
          </div>
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
