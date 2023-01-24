# react-typing-effect

## demo


https://user-images.githubusercontent.com/58759688/214214571-baf6842c-8c18-409e-8477-3488bf9cc6ce.mp4



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
