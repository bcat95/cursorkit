# API Template (PHP)
<?php
require_once __DIR__ . '/../bootstrap.php';

header('Content-Type: application/json; charset=utf-8');

try {
    // 1) Validate input
    $itemIds = isset($_GET['item_ids']) ? explode(',', $_GET['item_ids']) : [];
    // TODO: sanitize & validate

    // 2) Query
    $sql = 'SELECT * FROM products WHERE item_id IN (' . str_repeat('?,', count($itemIds)-1) . '?)';
    $stmt = $connect->prepare($sql);
    $stmt->execute($itemIds);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 3) Return
    echo json_encode(['ok'=>1, 'data'=>$rows]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['ok'=>0, 'error'=>$e->getMessage()]);
}
