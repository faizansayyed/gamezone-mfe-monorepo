// Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("button", {
    children: "Boop"
  });
};

// Shell.tsx
import {
  AppShell,
  Header,
  Title,
  Box,
  Button as Button2,
  useMantineTheme
} from "@mantine/core";

// useAppShell.ts
import create from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create(
  persist(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) => set((state) => ({ score: state.score + amount }))
    }),
    {
      name: "app-shell"
    }
  )
);

// Shell.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Shell = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  return /* @__PURE__ */ jsx2(AppShell, {
    padding: "md",
    styles: {
      main: {
        background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      }
    },
    header: /* @__PURE__ */ jsxs(Header, {
      height: 60,
      p: "xs",
      style: {
        display: "flex",
        background: theme.colors.blue[8]
      },
      children: [
        /* @__PURE__ */ jsx2(Title, {
          style: {
            color: "white"
          },
          children: title
        }),
        /* @__PURE__ */ jsx2(Box, {
          sx: { flexGrow: 1 }
        }),
        user && /* @__PURE__ */ jsxs(Box, {
          sx: { display: "flex" },
          children: [
            /* @__PURE__ */ jsxs(Title, {
              mr: "md",
              style: {
                color: "white"
              },
              children: [
                user,
                " - ",
                score
              ]
            }),
            /* @__PURE__ */ jsx2(Button2, {
              variant: "light",
              onClick: () => setUser(null),
              children: "Logout"
            })
          ]
        }),
        !user && /* @__PURE__ */ jsx2(Button2, {
          variant: "light",
          onClick: () => setUser("Jack"),
          children: "Login"
        })
      ]
    }),
    children
  });
};
export {
  Button,
  Shell
};
