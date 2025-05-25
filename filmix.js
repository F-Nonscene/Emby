/**
 * @type http-response
 * @rule ^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user\b
 * @tag VIP伪装
 */
(function() {
  'use strict';
  
  try {
    const obj = JSON.parse($response.body);
    
    // 修改 VIP 核心字段
    obj.is_vip = true;
    obj.vip_level = 1;
    
    // 设置时间周期（从当前时间到2025年底）
    const now = new Date().toISOString();
    obj.first_vip_start_time = "2025-01-31T23:59:59Z";
    obj.vip_start_time = "2025-01-31T23:59:59Z";
    obj.vip_end_time = "2025-12-31T23:59:59Z";
    
    // 增强辅助字段
    obj.year_total_match = 9;
    
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log(`VIP伪装失败: ${e}`);
    $done($response);
  }
})();
