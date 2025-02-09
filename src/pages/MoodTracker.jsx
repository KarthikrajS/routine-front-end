<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Mood Tracker</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    </head>
    <body class="bg-gray-100 font-roboto">
        <div class="container mx-auto p-4">
            <header class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">😊 Mood Tracker</h1>
            </header>
            <!-- Mood Selection -->
            <div class="bg-white p-4 rounded shadow mb-6">
                <h2 class="text-xl font-bold mb-4">😄 How are you feeling today?</h2>
                <div class="flex justify-around">
                    <button class="text-4xl">😄</button>
                    <button class="text-4xl">🙂</button>
                    <button class="text-4xl">😐</button>
                    <button class="text-4xl">😔</button>
                    <button class="text-4xl">😢</button>
                </div>
            </div>

            <div class="bg-white p-4 rounded shadow mb-6">
                <h2 class="text-xl font-bold mb-4">📝 Notes</h2>
                <textarea class="w-full p-2 border rounded" placeholder="Write your thoughts here..." rows="4"></textarea>
            </div>

            <div class="bg-white p-4 rounded shadow mb-6">
                <h2 class="text-xl font-bold mb-4">📉 Mood Trends (Last 7 Days)</h2>
                <img alt="Graph showing emotional trends" class="mx-auto" height="200" src="https://storage.googleapis.com/a1aa/image/BglNF9Cw4gZRBxGhvvsb929ORp9Jx7pUzLTabr7ikmSYiofJA.jpg" width="600" />
            </div>

            <div class="bg-white p-4 rounded shadow mb-6">
                <h2 class="text-xl font-bold mb-4">🏅 Badges</h2>
                <div class="flex justify-around">
                    <div class="text-center">
                        <img alt="Badge" class="mx-auto" height="100" src="https://storage.googleapis.com/a1aa/image/HJSkM0xuF476FJpD5awUPGhr0sVC5EeofuvJeqLezwlPmI6PB.jpg" width="100" />
                        <p class="mt-2">Mindful Logger</p>
                    </div>
                </div>
            </div>
            <div class="bg-white p-4 rounded shadow mb-6">
                <h2 class="text-xl font-bold mb-4">✨ Dynamic Animations</h2>
                <img alt="Waving emoji" class="mx-auto" height="100" src="https://storage.googleapis.com/a1aa/image/ZKqOrokwwgZRPBoKsNta4dvsetPebq5eDJfwlzFaXpVfLR0fE.jpg" width="100" />
            </div>
        </div>
    </body>
</html>
