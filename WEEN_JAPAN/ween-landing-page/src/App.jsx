import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    gender: '',
    height: '',
    phone: '',
    goal: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end only, just log for now
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã gửi thông tin. Chúng tôi sẽ liên hệ tư vấn trong 24 giờ.')
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Hệ thống hỗ trợ tăng trưởng toàn diện cho tuổi phát triển
          </h1>
          <p className="hero-subheadline">
            WEEN JAPAN giúp phụ huynh xây dựng lộ trình dinh dưỡng, vận động, giấc ngủ và theo dõi thói quen mỗi ngày cho trẻ trong giai đoạn phát triển.
          </p>
          <div className="hero-ctas">
            <button className="cta-primary">Nhận tư vấn lộ trình</button>
            <button className="cta-secondary">Xem hệ thống 30 ngày</button>
          </div>
        </div>
      </section>

      {/* Parent Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">Vấn đề của nhiều phụ huynh</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>Không biết con ngủ đủ giấc</h3>
              <p>Giấc ngủ là nền tảng cho sự phát triển, nhưng nhiều phụ huynh không theo dõi được chất lượng giấc ngủ của con.</p>
            </div>
            <div className="problem-card">
              <h3>Không đảm bảo dinh dưỡng đều đặn</h3>
              <p>Chế độ ăn uống hỗ trợ tăng trưởng cần được lên kế hoạch cụ thể theo độ tuổi và giới tính.</p>
            </div>
            <div className="problem-card">
              <h3>Thiếu vận động phù hợp</h3>
              <p>Vận động đúng cách giúp xương khớp phát triển khỏe mạnh, nhưng nhiều trẻ thiếu hướng dẫn.</p>
            </div>
            <div className="problem-card">
              <h3>Không theo dõi thói quen hàng ngày</h3>
              <p>Việc duy trì thói quen lành mạnh cần được theo dõi và điều chỉnh liên tục.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Growth System Section */}
      <section className="system-section">
        <div className="container">
          <h2 className="section-title">Hệ thống tăng trưởng mỗi ngày</h2>
          <div className="system-grid">
            <div className="system-card">
              <div className="card-icon">🍎</div>
              <h3>Dinh dưỡng</h3>
              <p>Kế hoạch ăn uống cân bằng theo độ tuổi và giới tính, hỗ trợ thói quen dinh dưỡng lành mạnh.</p>
            </div>
            <div className="system-card">
              <div className="card-icon">😴</div>
              <h3>Giấc ngủ</h3>
              <p>Hướng dẫn và theo dõi giấc ngủ chất lượng, tạo nền tảng phục hồi cho cơ thể.</p>
            </div>
            <div className="system-card">
              <div className="card-icon">🏃‍♂️</div>
              <h3>Vận động</h3>
              <p>Bài tập và hoạt động phù hợp với lứa tuổi, hỗ trợ phát triển xương khớp.</p>
            </div>
            <div className="system-card">
              <div className="card-icon">📊</div>
              <h3>Theo dõi</h3>
              <p>Hệ thống ghi nhận tiến độ hàng ngày, giúp duy trì thói quen và điều chỉnh kịp thời.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="packs-section">
        <div className="container">
          <h2 className="section-title">Các gói hỗ trợ</h2>
          <div className="packs-grid">
            <div className="pack-card">
              <h3>Gói Cơ bản</h3>
              <p>Hướng dẫn cơ bản về dinh dưỡng, giấc ngủ và vận động. Phù hợp cho gia đình muốn bắt đầu.</p>
              <ul>
                <li>Kế hoạch dinh dưỡng cơ bản</li>
                <li>Hướng dẫn giấc ngủ</li>
                <li>Bài tập vận động đơn giản</li>
              </ul>
            </div>
            <div className="pack-card growth">
              <h3>Gói Tăng trưởng</h3>
              <p>Hỗ trợ toàn diện với theo dõi cá nhân hóa và điều chỉnh lộ trình theo tiến độ.</p>
              <ul>
                <li>Tất cả trong Gói Cơ bản</li>
                <li>Theo dõi tiến độ hàng tuần</li>
                <li>Điều chỉnh lộ trình linh hoạt</li>
                <li>Hỗ trợ tư vấn định kỳ</li>
              </ul>
            </div>
            <div className="pack-card premium">
              <h3>Gói Cao cấp</h3>
              <p>Trải nghiệm đầy đủ với hệ thống theo dõi thông minh và hỗ trợ chuyên sâu.</p>
              <ul>
                <li>Tất cả trong Gói Tăng trưởng</li>
                <li>Ứng dụng theo dõi cá nhân</li>
                <li>Hỗ trợ AI điều chỉnh</li>
                <li>Tư vấn chuyên gia hàng tháng</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Tracker Section */}
      <section className="tracker-section">
        <div className="container">
          <h2 className="section-title">Theo dõi thói quen tăng trưởng</h2>
          <div className="tracker-grid">
            <div className="tracker-item">
              <span className="tracker-icon">🌙</span>
              <span>Giấc ngủ</span>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">🍽️</span>
              <span>Bữa ăn</span>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">💪</span>
              <span>Vận động</span>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">💧</span>
              <span>Uống nước</span>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">📏</span>
              <span>Đo chiều cao hàng tuần</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meal + Exercise Plan Section */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title">Kế hoạch dinh dưỡng và vận động</h2>
          <div className="plans-grid">
            <div className="plan-group">
              <h3>Nam</h3>
              <div className="age-groups">
                <div className="age-group">10–12 tuổi</div>
                <div className="age-group">13–15 tuổi</div>
                <div className="age-group">16–18 tuổi</div>
              </div>
            </div>
            <div className="plan-group">
              <h3>Nữ</h3>
              <div className="age-groups">
                <div className="age-group">10–12 tuổi</div>
                <div className="age-group">13–15 tuổi</div>
                <div className="age-group">16–18 tuổi</div>
              </div>
            </div>
          </div>
          <p className="plans-note">Mỗi kế hoạch được thiết kế riêng theo nhu cầu dinh dưỡng và mức độ hoạt động phù hợp với độ tuổi.</p>
        </div>
      </section>

      {/* Safety / Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">An toàn và đáng tin cậy</h2>
          <div className="trust-content">
            <p>WEEN JAPAN tập trung vào việc hỗ trợ thói quen sống khỏe mạnh, bao gồm dinh dưỡng cân bằng, giấc ngủ chất lượng, vận động phù hợp và theo dõi tiến độ hàng ngày.</p>
            <p>Chúng tôi không phải là phương pháp điều trị y tế hay thay thế cho tư vấn chuyên môn. Mọi thông tin chỉ mang tính chất tham khảo và hỗ trợ.</p>
            <p>Hệ thống của chúng tôi được xây dựng dựa trên các nguyên tắc khoa học về dinh dưỡng, phục hồi và phát triển khỏe mạnh.</p>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="form-section">
        <div className="container">
          <h2 className="section-title">Nhận tư vấn lộ trình</h2>
          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="parentName">Tên phụ huynh</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="childAge">Tuổi của con</label>
              <input
                type="number"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleInputChange}
                min="10"
                max="18"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Giới tính của con</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="height">Chiều cao hiện tại (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                min="100"
                max="200"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại / Zalo</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="goal">Mục tiêu chính</label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="Ví dụ: Hỗ trợ phát triển chiều cao, cải thiện sức khỏe tổng thể..."
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="form-submit">Gửi thông tin tư vấn</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
