// icon:git | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import React from "react";
interface IconAirballoonProps {
  props?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

export function IconAirballoon({ props, className }: IconAirballoonProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11 23a2 2 0 01-2-2v-2h6v2a2 2 0 01-2 2h-2m1-22c.71 0 1.39.09 2.05.26C15.22 2.83 16 5.71 16 9c0 2.28-.38 4.37-1 7a2 2 0 01-2 2h-2a2 2 0 01-2-2c-.62-2.63-1-4.72-1-7 0-3.29.78-6.17 1.95-7.74C10.61 1.09 11.29 1 12 1m8 7c0 3.18-1.85 7.92-4.54 9.21C16.41 15.39 17 11.83 17 9c0-2.83-.59-5.39-1.54-7.21C18.15 3.08 20 4.82 20 8M4 8c0-3.18 1.85-4.92 4.54-6.21C7.59 3.61 7 6.17 7 9s.59 6.39 1.54 8.21C5.85 15.92 4 11.18 4 8z" />
    </svg>
  );
}

interface IconFiletypeScssProps {
  props?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

export function IconFiletypeScss({ props, className }: IconFiletypeScssProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 019.5 3V1H4a1 1 0 00-1 1v9H2V2a2 2 0 012-2h5.5L14 4.5zM1.356 15.29a1.176 1.176 0 01-.111-.449h.765a.578.578 0 00.255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 00.255-.193.506.506 0 00.085-.29.387.387 0 00-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 01-.539-.214 1.001 1.001 0 01-.351-.367 1.068 1.068 0 01-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 00-.12-.258.624.624 0 00-.247-.181.923.923 0 00-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 00-.184.384c0 .121.048.22.143.3a.97.97 0 00.405.175l.62.143c.217.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 01-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 01-.478-.252 1.13 1.13 0 01-.29-.375zm4.274-2.23a1.732 1.732 0 00-.103.633v.495c0 .246.034.455.103.627a.833.833 0 00.298.392.846.846 0 00.478.132.868.868 0 00.401-.088.7.7 0 00.273-.249.798.798 0 00.117-.363h.765v.076a1.27 1.27 0 01-.226.674 1.39 1.39 0 01-.55.454 1.81 1.81 0 01-.786.164c-.36 0-.664-.072-.914-.217a1.424 1.424 0 01-.571-.626c-.13-.272-.194-.597-.194-.976v-.498c0-.38.066-.705.197-.979a1.44 1.44 0 01.57-.633c.253-.148.557-.222.912-.222.219 0 .421.032.607.097.187.062.35.153.489.272a1.324 1.324 0 01.466.964v.073h-.765a.85.85 0 00-.12-.38.7.7 0 00-.273-.261.803.803 0 00-.398-.097.814.814 0 00-.475.138.868.868 0 00-.301.398zm2.609 1.781a1.13 1.13 0 00.401.823c.129.108.288.192.478.252.19.061.41.091.665.091.338 0 .624-.053.858-.158.236-.105.416-.252.54-.44a1.17 1.17 0 00.187-.656c0-.224-.045-.41-.135-.56a1.002 1.002 0 00-.375-.357 2.028 2.028 0 00-.566-.21l-.62-.144a.97.97 0 01-.405-.176.37.37 0 01-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.142 0 .265.023.369.068a.623.623 0 01.246.181.56.56 0 01.12.258h.75a1.091 1.091 0 00-.2-.566 1.21 1.21 0 00-.5-.41 1.813 1.813 0 00-.78-.152c-.292 0-.551.05-.776.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.152.095.332.167.54.213l.617.144c.207.049.362.113.463.193a.387.387 0 01.153.326.512.512 0 01-.085.29.558.558 0 01-.255.193 1.07 1.07 0 01-.413.07c-.118 0-.224-.013-.32-.04a.837.837 0 01-.249-.115.578.578 0 01-.255-.384H8.24zm3.502.449a1.176 1.176 0 01-.11-.449h.764a.578.578 0 00.255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.558.558 0 00.255-.193.506.506 0 00.085-.29.387.387 0 00-.152-.326c-.102-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 01-.54-.214 1.002 1.002 0 01-.351-.367 1.068 1.068 0 01-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .565.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 00-.12-.258.623.623 0 00-.247-.181.923.923 0 00-.369-.068c-.217 0-.387.05-.512.152a.472.472 0 00-.185.384c0 .121.048.22.143.3a.97.97 0 00.405.175l.62.143c.218.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.062.466-.187.656a1.217 1.217 0 01-.54.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 01-.478-.252 1.131 1.131 0 01-.29-.375z"
      />
    </svg>
  );
}

// icon:trpc | Simple Icons https://simpleicons.org | SimpleIcons.org

interface IconTrpcProps {
  props?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

export function IconTrpc({ props, className }: IconTrpcProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12zM1.21 12A10.78 10.78 0 0012 22.79 10.78 10.78 0 0022.79 12 10.78 10.78 0 0012 1.21 10.78 10.78 0 001.21 12zm10.915-6.086l2.162 1.248a.25.25 0 01.125.217v1.103l2.473 1.428a.25.25 0 01.125.217v2.355l.955.551a.25.25 0 01.125.217v2.496a.25.25 0 01-.125.217l-2.162 1.248a.25.25 0 01-.25 0l-.956-.552-2.472 1.427a.25.25 0 01-.25 0l-2.472-1.427-.956.552a.25.25 0 01-.25 0l-2.162-1.248a.25.25 0 01-.125-.217V13.25a.25.25 0 01.125-.217l.955-.551v-2.355a.25.25 0 01.125-.217l2.473-1.428V7.38a.25.25 0 01.125-.217l2.162-1.248a.25.25 0 01.25 0zm1.268 10.049a.25.25 0 01-.125-.217V13.25a.25.25 0 01.125-.217l2.16-1.248a.25.25 0 01.25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 01-.125.217l-2.162 1.248a.25.25 0 01-.25 0l-2.162-1.248a.25.25 0 01-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 01.25 0l2.16 1.248a.25.25 0 01.125.217v2.496a.25.25 0 01-.125.217l-.705.408L12 17.582l2.098-1.211zM10.088 9.73l1.662.96V8.766l-1.662-.955zm3.824 0V7.811l-1.662.955v1.924zM12 6.418l-1.66.96 1.66.954 1.66-.954zm-5.59 9.184l1.66.958v-1.921l-1.66-.956zm3.822 0v-1.92l-1.662.957v1.923zm-1.91-3.311l-1.662.96 1.661.955 1.66-.956zm5.446 3.31l1.66.96v-1.922l-1.66-.956zm3.822 0v-1.918l-1.662.956v1.922zm-1.912-3.31l-1.66.96 1.66.955 1.66-.956z" />
    </svg>
  );
}

export default IconTrpc;
