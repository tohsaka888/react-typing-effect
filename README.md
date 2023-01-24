# react-typing-effect

## demo


## props

```ts
export type TypingProps = {
  children: string;
  interval: number;
  existTime: number;
  textStyle?: CSSProperties;
  symbolStyle?: CSSProperties;
  symbol?: React.ReactElement;
};
```

## usage

```tsx
<Typing
  interval={100}
  existTime={2000}
  textStyle={{
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
  }}
  symbolStyle={{
    borderColor: "red",
  }}
>
  Technology geeks save the world!
</Typing>
```
