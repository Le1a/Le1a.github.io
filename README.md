<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Redirect with Countdown</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f0f8ff; /* 天蓝色背景 */
        }

        .countdown-container {
            text-align: center;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .countdown-container p {
            font-size: 24px;
            color: #333;
        }

        #countdown {
            font-weight: bold;
            color: #ff4500; /* 橙红色的倒计时数字 */
        }
    </style>
</head>
<body>
    <div class="countdown-container">
        <p>Redirecting in <span id="countdown">3</span> seconds...</p>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let countdownElement = document.getElementById('countdown');
            let countdownValue = 3;

            let interval = setInterval(function() {
                countdownValue--;
                countdownElement.textContent = countdownValue;

                if (countdownValue === 0) {
                    clearInterval(interval);
                    window.location.href = 'https://www.le1a.me/'; // 替换为你要跳转的URL
                }
            }, 1000);
        });
    </script>
</body>
</html>
