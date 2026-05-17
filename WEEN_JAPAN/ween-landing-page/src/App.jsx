import { useState } from 'react'
import './App.css'

const heroLabels = [
  { label: 'Sleep', position: 'top-left' },
  { label: 'Nutrition', position: 'top-right' },
  { label: 'Movement', position: 'bottom-left' },
  { label: 'Tracking', position: 'bottom-right' }
]

const productCards = [
  { title: 'GH CREATION EX+', subtitle: 'Giấc ngủ & phục hồi', accent: 'purple' },
  { title: 'DAY ACTIVATION', subtitle: 'Năng lượng cân bằng', accent: 'cyan' },
  { title: 'NIGHT RECOVERY', subtitle: 'Thư giãn và hồi phục', accent: 'midnight' }
]

const problemCards = [
  {
    icon: '🌙',
    title: 'Ngủ muộn, ngủ không sâu',
    text: 'Thói quen ngủ ảnh hưởng lớn đến phục hồi, năng lượng và nhịp sinh hoạt mỗi ngày.'
  },
  {
    icon: '🍽️',
    title: 'Ăn uống thất thường',
    text: 'Bữa ăn thiếu đều đặn và cân bằng có thể làm trẻ khó duy trì nền tảng dinh dưỡng ổn định.'
  },
  {
    icon: '🤸‍♀️',
    title: 'Ít vận động phù hợp',
    text: 'Cơ thể cần vận động đúng mức để hỗ trợ sức khỏe xương, cơ, tư thế và sức bền.'
  },
  {
    icon: '📊',
    title: 'Không biết theo dõi từ đâu',
    text: 'Chiều cao cần được quan sát theo tháng, không phải đánh giá vội chỉ sau vài ngày.'
  }
]

const systemCards = [
  {
    icon: '🥗',
    title: 'Dinh dưỡng',
    text: 'Gợi ý bữa ăn cân bằng theo độ tuổi và giới tính, giúp trẻ duy trì nền tảng dinh dưỡng lành mạnh.'
  },
  {
    icon: '🌙',
    title: 'Giấc ngủ',
    text: 'Hướng dẫn thói quen ngủ, phục hồi và nhịp sinh hoạt phù hợp cho tuổi phát triển.'
  },
  {
    icon: '🤸‍♀️',
    title: 'Vận động',
    text: 'Bài tập và hoạt động phù hợp, hỗ trợ thể lực, tư thế và sự năng động.'
  },
  {
    icon: '📈',
    title: 'Theo dõi',
    text: 'Ghi nhận chiều cao, cân nặng và thói quen hằng ngày để điều chỉnh lộ trình kịp thời.'
  }
]

const timelineSteps = [
  {
    number: '1',
    title: 'Ngày 1 — Đánh giá nền tảng',
    text: 'Ghi nhận tuổi, giới tính, chiều cao, cân nặng, thói quen ngủ, vận động và mục tiêu.'
  },
  {
    number: '2',
    title: 'Tuần 1 — Thiết lập thói quen',
    text: 'Xây dựng routine cơ bản về ngủ, ăn uống, vận động và đo lường.'
  },
  {
    number: '3',
    title: 'Tuần 2–3 — Theo dõi & điều chỉnh',
    text: 'Quan sát mức độ duy trì thói quen và điều chỉnh lộ trình cho phù hợp thực tế.'
  },
  {
    number: '4',
    title: 'Tuần 4 — Tổng kết lộ trình',
    text: 'Tổng hợp dữ liệu, đánh giá tiến độ và đề xuất bước tiếp theo.'
  }
]

const packageOptions = [
  {
    name: 'Gói Cơ bản',
    tagline: 'Dành cho người mới bắt đầu',
    bullets: [
      'Lộ trình ngủ, ăn uống và vận động cơ bản',
      'Checklist theo dõi 30 ngày',
      'Hướng dẫn duy trì thói quen tại nhà'
    ]
  },
  {
    name: 'Gói Tăng trưởng',
    badge: 'Khuyên dùng',
    tagline: 'Theo sát hơn trong 30 ngày',
    bullets: [
      'Tất cả trong Gói Cơ bản',
      'Theo dõi thói quen hằng ngày',
      'Điều chỉnh lộ trình linh hoạt',
      'Hỗ trợ tư vấn định kỳ'
    ],
    featured: true
  },
  {
    name: 'Gói Cao cấp',
    tagline: 'Cá nhân hóa và theo dõi chuyên sâu',
    bullets: [
      'Tất cả trong Gói Tăng trưởng',
      'Đánh giá chi tiết hơn theo hồ sơ cá nhân',
      'Theo dõi sát hơn trong quá trình sử dụng',
      'Tư vấn chuyên sâu theo từng giai đoạn'
    ]
  }
]

const trackerItems = [
  { icon: '🌙', label: 'Giấc ngủ' },
  { icon: '🍽️', label: 'Bữa ăn' },
  { icon: '💪', label: 'Vận động' },
  { icon: '💧', label: 'Uống nước' },
  { icon: '📏', label: 'Đo chiều cao hằng tuần' },
  { icon: '✨', label: 'Tâm trạng & năng lượng' }
]

const planGroups = [
  {
    title: 'Nam',
    ages: ['10–12 tuổi', '13–15 tuổi', '16–18 tuổi']
  },
  {
    title: 'Nữ',
    ages: ['10–12 tuổi', '13–15 tuổi', '16–18 tuổi']
  }
]

function App() {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    gender: '',
    height: '',
    weight: '',
    fatherHeight: '',
    motherHeight: '',
    pubertyStatus: '',
    sleepHabits: '',
    phone: '',
    goal: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã gửi thông tin. Chúng tôi sẽ liên hệ tư vấn trong 24 giờ.')
  }

  return (
    <div className="app">
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">WEEN JAPAN</p>
            <h1>Hệ thống hỗ trợ tăng trưởng chiều cao cho tuổi phát triển</h1>
            <p className="hero-text">
              WEEN JAPAN giúp xây dựng lộ trình ngủ, dinh dưỡng, vận động và theo dõi thói quen mỗi ngày cho trẻ trong giai đoạn phát triển.
            </p>
            <div className="hero-ctas">
              <button className="cta-primary">Nhận tư vấn lộ trình</button>
              <button className="cta-secondary">Xem hệ thống 30 ngày</button>
            </div>
            <div className="hero-badges">
              <span className="badge">Routine-based</span>
              <span className="badge">Parent-friendly</span>
              <span className="badge">Wellness tracking</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-soft">
              <span className="visual-label">Sleep</span>
              <div className="visual-illustration">🌙</div>
              <p>Hỗ trợ giấc ngủ phục hồi</p>
            </div>
            <div className="product-stack">
              {productCards.map((item) => (
                <div key={item.title} className={`product-card product-card-${item.accent}`}>
                  <span className="product-chip">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className="hero-card hero-card-sharp">
              <span className="visual-label">Tracking</span>
              <div className="visual-illustration">📈</div>
              <p>Ghi nhận thói quen mỗi ngày</p>
            </div>
            <div className="hero-labels">
              {heroLabels.map((item) => (
                <span key={item.label} className={`hero-label ${item.position}`}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">Nhiều phụ huynh không thiếu quan tâm, chỉ thiếu một hệ thống dễ theo dõi</h2>
          <div className="card-grid">
            {problemCards.map((card) => (
              <article key={card.title} className="glass-card problem-card">
                <div className="problem-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-section">
        <div className="container">
          <h2 className="section-title">Hệ thống tăng trưởng mỗi ngày</h2>
          <div className="card-grid">
            {systemCards.map((card) => (
              <article key={card.title} className="glass-card feature-card">
                <div className="icon-circle">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Hệ thống 30 ngày hoạt động như thế nào?</h2>
          <div className="timeline-grid">
            {timelineSteps.map((step) => (
              <article key={step.title} className="timeline-card glass-card">
                <div className="timeline-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="packs-section">
        <div className="container">
          <h2 className="section-title">Các gói hỗ trợ</h2>
          <div className="packs-grid">
            {packageOptions.map((pack) => (
              <article
                key={pack.name}
                className={`pack-card glass-card ${pack.featured ? 'featured' : ''}`}
              >
                {pack.badge && <span className="pack-badge">{pack.badge}</span>}
                <h3>{pack.name}</h3>
                <p className="pack-tagline">{pack.tagline}</p>
                <ul>
                  {pack.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tracker-section">
        <div className="container">
          <h2 className="section-title">Theo dõi thói quen tăng trưởng</h2>
          <p className="section-subtitle">Nền tảng ghi nhận 6 chỉ số chính mỗi ngày để theo dõi lộ trình của trẻ</p>
          <div className="tracker-grid">
            {trackerItems.map((item) => (
              <div key={item.label} className="tracker-item">
                <span className="tracker-icon">{item.icon}</span>
                <span className="tracker-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plans-section">
        <div className="container">
          <h2 className="section-title">Kế hoạch dinh dưỡng và vận động</h2>
          <p className="section-subtitle">Mỗi kế hoạch được thiết kế theo độ tuổi, giới tính và mức độ vận động phù hợp.</p>
          <div className="plans-grid">
            {planGroups.map((group) => (
              <div key={group.title} className="plan-group glass-card">
                <h3>{group.title}</h3>
                <div className="age-groups">
                  {group.ages.map((age) => (
                    <button key={age} className="age-group" type="button">
                      {age}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">An toàn, minh bạch và thực tế</h2>
          <div className="trust-content glass-card">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Chiều cao phụ thuộc vào nhiều yếu tố</strong></p>
                <p>Di truyền, dinh dưỡng, giấc ngủ, vận động, độ tuổi và tình trạng phát triển của từng trẻ.</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Chúng tôi không cam kết kết quả tức thì</strong></p>
                <p>WEEN JAPAN tập trung vào việc xây dựng thói quen hỗ trợ phát triển lành mạnh, theo dõi đều đặn và tư vấn lộ trình phù hợp.</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <div>
                <p><strong>Không thay thế tư vấn y tế</strong></p>
                <p>Với các trường hợp đặc biệt, phụ huynh nên tham khảo ý kiến chuyên môn từ bác sĩ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <h2 className="section-title">Nhận đánh giá lộ trình miễn phí</h2>
          <p className="section-subtitle">Trả lời một vài câu hỏi để chúng tôi hiểu rõ hơn tình hình của con và gợi ý lộ trình phù hợp nhất.</p>
          <form className="lead-form glass-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parentName">Tên phụ huynh <span className="required">*</span></label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="childAge">Tuổi của con <span className="required">*</span></label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="10-18"
                  min="10"
                  max="18"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Giới tính của con <span className="required">*</span></label>
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
                <label htmlFor="height">Chiều cao hiện tại (cm) <span className="required">*</span></label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: 160"
                  min="100"
                  max="200"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="weight">Cân nặng hiện tại (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: 55"
                  min="20"
                  max="120"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherHeight">Chiều cao của ba (cm)</label>
                <input
                  type="number"
                  id="fatherHeight"
                  name="fatherHeight"
                  value={formData.fatherHeight}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: 175"
                  min="140"
                  max="220"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="motherHeight">Chiều cao của mẹ (cm)</label>
                <input
                  type="number"
                  id="motherHeight"
                  name="motherHeight"
                  value={formData.motherHeight}
                  onChange={handleInputChange}
                  placeholder="Ví dụ: 162"
                  min="140"
                  max="200"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pubertyStatus">Tình trạng dậy thì <span className="required">*</span></label>
                <select
                  id="pubertyStatus"
                  name="pubertyStatus"
                  value={formData.pubertyStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Chọn tình trạng</option>
                  <option value="unknown">Chưa rõ</option>
                  <option value="prePuberty">Chưa dậy thì</option>
                  <option value="inPuberty">Đang trong giai đoạn dậy thì</option>
                  <option value="postPuberty">Đã dậy thì</option>
                </select>
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="sleepHabits">Thói quen ngủ hiện tại <span className="required">*</span></label>
              <input
                type="text"
                id="sleepHabits"
                name="sleepHabits"
                value={formData.sleepHabits}
                onChange={handleInputChange}
                placeholder="Ví dụ: Ngủ muộn 11-12 giờ, hay thức giấc nửa đêm"
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone">Số điện thoại / Zalo <span className="required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+84 9xx xxx xxx"
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="goal">Mục tiêu hoặc vấn đề đang quan tâm</label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="Ví dụ: Hỗ trợ phát triển chiều cao, cải thiện tư thế, nâng cao năng lượng, cải thiện giấc ngủ..."
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="form-submit">Nhận đánh giá routine miễn phí</button>
            <p className="form-note">Thông tin chỉ dùng để gợi ý routine phù hợp hơn. Chúng tôi không chia sẻ cho bên thứ ba.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
