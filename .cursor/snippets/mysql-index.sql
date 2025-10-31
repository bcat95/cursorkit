-- Example indexes for analytics-heavy table
ALTER TABLE Orders
  ADD INDEX idx_orders_userId_payTime (userId, payTime),
  ADD INDEX idx_orders_conversionStatus (conversionStatus),
  ADD INDEX idx_orders_purchaseTime (purchaseTime);
