<template>
  <div class="arenademos">
    <div id="demo1">
      <ArenaDemoCard
        title="City Z"
        img="/src/assets/6c0c9d4578bc78f92402beb6a6c6ebd5.jpeg"
      ></ArenaDemoCard>
    </div>
    <div id="demo2">
      <ArenaDemoCard title="City Z: SURVIVORS" img="/src/assets/frame1.png"></ArenaDemoCard>
    </div>
    <div id="demo3">
      <ArenaDemoCard
        title="City Z: Antidote"
        img="https://s3-alpha-sig.figma.com/img/266f/f37c/1b673a29163c3fa5857078945d4955a5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oxRiNhDEsQLsc2Bk-UxgCww~Ip7l2UfcG9qiX7d2f-JiPmQr~q467HnyFtmgJH3OR6nAV15Roh8fUUz2CbcHiiFK4IrxC83DnPrKlloSdY00CLatbxsfZVA3hB0qvQrWfWo5SxEPcPMs4u0xSkaG0JhdSyx3BQz6XZt5jjo6xsZQc12ra6KSoTRX0G-LiG7nVH2Wg-e4qgtyDQFroTxsRSpab4sIb9PaJN1~txkVyPZtz1dlmoIPlJV5AoVxxTtE8i3aIQqoEfEKGog4vvvR2nI13Udkr~TVvENJGwm2xJBBm4H9I9okQYcuOGwo-V8X361eBoGz-RFcrqnoub9VTw__"
      ></ArenaDemoCard>
    </div>
    <div id="demo4">
      <ArenaDemoCard
        title="REVOLTA"
        img="https://s3-alpha-sig.figma.com/img/99ac/4509/2f25386733132ec3cb7cb392d91a6243?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kjx8Z020S-DavcAk1dqwQLOS-K8CLm7ynM4iawTtfs~frhgYPlS9ZeXBJWgbNI83V2m-53Z35yDeY00NM7yNJ3YW1Ol6vpaqQqNWm1aq~vRBqCc9VDp-JlhTxClWoHtNWG5pv9ymGB8LypFZKC48QuP-1bzMbv93TsG4DBj-bzECaBmOVD3rdOJ8E7ruVLeRRVagjcZ78o5J9Eq-d9KRprV6f33IzVk14U4A7oM25OCZeUF4~R-TSEkoxwQinKIrWcfShw58a82TTNtS8PtWmcvqvKP5O1VqY~QRz-YP5nqG5dDes~G9ABnBSkPMOjt8aFG2c64AUQUW7BMoOO~McA__"
      ></ArenaDemoCard>
    </div>
    <div id="lastdemos">
      <div id="demo5">
        <ArenaDemoCard
          title="Station Zarya"
          img="https://s3-alpha-sig.figma.com/img/fd56/65f1/b3e9066064d35c7f019919589e8d687e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpRE-qet2PFeIRJrQENyTRycpHApHkFvuJoeQRCQ7jSz9sxr1l8prOEI31wcJLnlbj7EJhwhSLtK-uutOUSRaS06nKEJiByXvKJU51yyi4~psMLnlSO3dRfYkmdmb4HDAIcEau5LcJzQ361gV0RhKq9vgEt59rI~6VaRz00iNsSDbKXQ4vmkNySyFmTWLoAaIiVYUQ5xfI98hzvanZq6pS0IIrLefDwcHqkACn0heqPJC1280iYhRyQD3WDk-AKHCB7a5QtCF0G6ZUym~l3VjJjLXyZKe2fcHgaTiW0aJ4ICEX6L2Hpg5geWlZJ10a3IYgtjyZDVPu17hpvSROLcSQ__"
        ></ArenaDemoCard>
      </div>
      <div id="demo6">
        <ArenaDemoCard
          title="LOST SANCTUARY"
          img="https://s3-alpha-sig.figma.com/img/b7ca/f393/0ff1386976c5f908de83f59781ee0f0e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPc31LbEThnpaacrz6VRMjb~ZkeG2icJOz9nQJxks-RSclQQIF24TGB0PEHDgBMn~w5byQlERmsUHakEQqQIXOM8PK~hbOq7KaPkC9ZJf7NsQsXTQZVYmhWtoT2ragRBAOEnJAIHbxcLA~W90Q6~m67MuzJBsQ4slJbdZzhRTdMPyvamAyhxOHNU902BD3zBSPjR1EAnVT3Ku4~oiF3jNPBhHkBSase~FrXtvl8i0FfmmJZr2DCNURY5dk8pAtjulZcZUL1uvpkwax~OYskamm8L5GFMxm4qjOYXXdKO5wJxqahReCiaG1QZNuX3Z8RHg-l6Vesjom~1RbUc4Wpbgw__"
        ></ArenaDemoCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArenaDemoCard from './ArenaDemoCard.vue'
</script>

<style scoped>
.arenademos {
  display: grid;
  margin-top: -40px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 500px);
  gap: 10px;
  grid-template-areas:
    'demo1 demo2 demo3'
    'demo4 demo4 demo4'
    'lastdemos lastdemos lastdemos ';
}
#demo1 {
  grid-area: demo1;
}
#demo2 {
  grid-area: demo2;
}
#demo3 {
  grid-area: demo3;
}
#demo4 {
  grid-area: demo4;
}
#lastdemos {
  grid-area: lastdemos;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'demo5 demo6';
}
#demo5 {
  grid-area: demo5;
}
#demo6 {
  grid-area: demo6;
}
</style>
