export const generateRandomNotificationMessage = (): string => {
    const messages = [
      "쁘띠님이 쁘모님의 블랙후드를 포토리뷰 남겼습니다.",
      "니모님이 쁘모님의 흰색패딩를 포토리뷰 남겼습니다.",
      "이안천사님이 쁘모님의 나이키팬츠를 포토리뷰 남겼습니다."
    ];
  
    return messages[Math.floor(Math.random() * messages.length)];
};