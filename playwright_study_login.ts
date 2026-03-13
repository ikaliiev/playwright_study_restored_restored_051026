
test('Login to Clockwise Hub - TS version', async ({page}) => {

    const baseUrl = process.env.BASE_URL;
    const email = process.env.ADMIN_EMAIL||'';
    const password = process.env.ADMIN_PASSWORD||'';

    //Открываем страницу
    await page.goto(baseUrl + 'login');

     //Вводим данные
    await page.locator('#email').fill(email);
    await page.locator('#password').fill(password);

    //Нажимаем на кнопку
    await page.locator('button[type="submit"]').click();
    
    // Проверяем, что URL теперь соответствует главной странице
    await expect(page).toHaveURL(new RegExp(baseUrl || ''));

    //Проверяем заголовок и свое имя
    await expect(page).toHaveTitle('Home');


});
