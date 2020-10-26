import React from "react";
import classNames from "classnames";
import {
  Container,
  Image,
  Button,
  Form,
  Group,
  Title,
  InputText,
  InputDate,
  InputTextArea,
  Breakrow,
  GroupButton,
  Submit,
  StyledInlineErrorMessage,
  Delete,
} from "./styles";

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames("card", classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Form = function CardForm({ classes, children, ...restProps }) {
  return (
    <Form className={classNames("card__form", classes)} {...restProps}>
      {children}
    </Form>
  );
};

Card.Form.BreakRow = function CardFormBreakRow({
  classes,
  children,
  ...restProps
}) {
  return (
    <Breakrow
      className={classNames("card__form__breakrow", classes)}
      {...restProps}
    >
      {children}
    </Breakrow>
  );
};

Card.Form.Group = function CardFormGroup({ classes, children, ...restProps }) {
  return (
    <Group className={classNames("card__form__group", classes)} {...restProps}>
      {children}
    </Group>
  );
};

Card.Form.Title = function FormTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames("card__form__title", classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Form.InputText = function FormInputText({ classes, ...restProps }) {
  return (
    <InputText
      className={classNames("card__form__inputtext", classes)}
      {...restProps}
    />
  );
};

Card.Form.InputDate = function FormInputDate({ classes, ...restProps }) {
  return (
    <InputDate
      className={classNames("card__form__inputdate", classes)}
      {...restProps}
    />
  );
};

Card.Form.InputTextArea = function FormInputTextArea({
  classes,
  ...restProps
}) {
  return (
    <InputTextArea
      className={classNames("card__form__inputtextarea", classes)}
      {...restProps}
    />
  );
};

Card.Image = function CardImage({ src, classes, ...restProps }) {
  return (
    <Image
      src={src}
      className={classNames("card__image", classes)}
      {...restProps}
    />
  );
};

Card.Form.GroupButton = function CardFromGroupButton({
  classes,
  children,
  ...restProps
}) {
  return (
    <GroupButton
      className={classNames("card__form__groupbutton", classes)}
      {...restProps}
    >
      {children}
    </GroupButton>
  );
};

Card.Form.Submit = function CardFromSubmit({ classes, ...restProps }) {
  return (
    <Submit
      className={classNames("card__form__submit", classes)}
      {...restProps}
    />
  );
};

Card.Form.Delete = function CardFromDelete({ classes, ...restProps }) {
  return (
    <Delete
      className={classNames("card__form__delete", classes)}
      {...restProps}
    />
  );
};

Card.Button = function CardButton({ classes, ...restProps }) {
  return (
    <Button className={classNames("card__button", classes)} {...restProps} />
  );
};


Card.Form.StyledInlineErrorMessage = function CardButton({ classes, children, ...restProps }) {
  return (
    <StyledInlineErrorMessage
      className={classNames("card__form_styledInlineErrorMessage", classes)}
      {...restProps}
    >
       {children}
    </StyledInlineErrorMessage>
  );
};

