export async function onRequest(context) {
    const { request } = context;

    if (request.url.endsWith('/vote')) {
        // Workersのエンドポイントにリダイレクト
        const newUrl = new URL(request.url);
        newUrl.hostname = 'campus-vote.urlcom1111.workers.dev'; // サブドメインのみ
        newUrl.pathname = '/vote'; // パスを適切に変更
        const newRequest = new Request(newUrl, request);
        return await fetch(newRequest);
    }

    // 他のリクエストはそのまま返す
    return await context.next();
}
