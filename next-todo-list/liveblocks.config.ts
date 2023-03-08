import { createClient, LiveList } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";


type Presence = {
    isTyping: boolean;
  };

type Storage = {
    todos:   LiveList<{text: string}>;
  };



const client = createClient({
  publicApiKey:
    "pk_dev_odkVgu3gbr2HCzdGYksNJslBWBzy_d5lwYjOPCmUg5jo9IzVwOcKIYa-Pmh0h6c-",
});

export const {
  suspense: { RoomProvider,useMutation,  useOthers , useStorage, useUpdateMyPresence},
} = createRoomContext<Presence, Storage>(client);
