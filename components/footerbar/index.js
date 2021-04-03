(()=> {
	const template = `
		<style>
			@import url('common/css/reset.css');

			.footer {
				background-color: #333;
			}

			.footer-cell {
				overflow: hidden;
			}


			.footer_company-info {
				padding-top: 0.25rem;
				padding-bottom: 0.2rem;
				border-bottom: 1px solid #fff;
			}

			.footer_logoBox {
				text-align: center;
			}

			.footer_logo {
				width: 1.64rem;
			}

			.footer_qr-codeBox {
				margin-top: 0.2rem;
				text-align: center;
			}

			.footer_qr-code {
				width: 1.1rem;
			}

			.footer_qr-code-hintText {
				margin-top: 0.1rem;
				font-size: 0.15rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				text-align: center;
				color: #fff;
			}

			.footer_consulting-title {
				margin-top: 0.2rem;
				font-size: 0.15rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				line-height: 0.11rem;
				text-align: center;
				color: #fff;
			}

			.footer_consulting-telephone {
				margin-top: 0.08rem;
				font-size: 0.27rem;
				font-family: Source Han Sans CN;
				font-weight: bold;
				text-align: center;
				color: #fff;
			}

			.footer_text {
				margin-top: 0.07rem;
				font-size: 0.14rem;
				font-family: Source Han Sans CN;
				font-weight: 300;
				line-height: 0.11rem;
				text-align: center;
				color: #fff;
			}

			.footer_text-first {
				margin-top: 0.25rem;
			}

			.footer_company-name {
				margin-top: 0.2rem;
				font-size: 0.2rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				text-align: center;
				color: #fff;
			}

			.footer_english {
				font-size: 0.011rem;
				font-family: Source Han Sans CN;
				font-weight: 300;
				line-height: 0.19rem;
				text-align: center;
				color: #fff;
			}

			.footer_company-addressInfo {
				padding-top: 0.15rem;
				padding-bottom: 0.35rem;
			}

			.footer_company-address {
				font-size: 0.09rem;
				font-family: Source Han Sans CN;
				font-weight: 300;
				line-height: 0.19rem;
				text-align: center;
				color: #fff;
			}

			.footer-navbar {
				position: fixed;
				bottom: 0;
				left: 0;
				z-index: 9;
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 0.6rem;
				background-color: #fff;
			}

			.footer-navbar-blank {
				height: 0.6rem;
			}

			.footer-navbar-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 25%;
			}

			.footer-navbar-item a {
				text-align: center;
			}

			.footer-navbar-itemIcon {
				height: 0.2rem;
			}

			.footer-navbar-itemText {
				margin-top: 0.02rem;
				font-size: 0.1rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				line-height: 0.17rem;
				color: #404040;
			}

			.footer-navbar-item_active .footer-navbar-itemText {
				color: #B91B23;
			}
		</style>
		<div>
			<div class="footer">
				<div class="footer-cell footer_company-info">
					<div class="footer_logoBox">
						<img src="imgs/logo2.png" class="footer_logo" />
					</div>
					<div class="footer_qr-codeBox">
						<img src="imgs/qr_code.png" class="footer_qr-code" />
					</div>
					<p class="footer_qr-code-hintText">扫一扫，关注我们</p>

					<p class="footer_consulting-title">在线咨询合作热线</p>
					<a href="tel:400 000 0000"><p class="footer_consulting-telephone">400 000 0000</p></a>
					<p class="footer_company-name">有红餐饮餐饮管理有限公司</p>
					<p class="footer_english">Youhong Catering Management Co., Ltd</p>
				</div>

				<div class="footer-cell footer_company-addressInfo">
					<p class="footer_company-address">
						公司地址: 成都市环球中心W1区2132室<br/>
						Copyright © 2019 有红餐饮餐饮管理有限公司 版权所有<br/>
						蜀ICP备00000000号 技术支持：推来客网络
					</p>
				</div>
			</div>
			
			<div class="footer-navbar-blank"></div>
			<div class="footer-navbar">
				<div class="footer-navbar-item">
					<a href="home.html?pageIndex=0">
						<img src="imgs/footer_navbar_icon_1.png" class="footer-navbar-itemIcon" />
						<p class="footer-navbar-itemText">首页</p>
					</a>
				</div>
				<div class="footer-navbar-item">
					<a href="join-in.html?pageIndex=4">
						<img src="imgs/footer_navbar_icon_2.png" class="footer-navbar-itemIcon" />
						<p class="footer-navbar-itemText">合作加盟</p>
					</a>
				</div>
				<div class="footer-navbar-item">
					<a>
						<img src="imgs/footer_navbar_icon_3.png" class="footer-navbar-itemIcon" />
						<p class="footer-navbar-itemText">电话咨询</p>
					</a>
				</div>
				<div class="footer-navbar-item">
					<a>
						<img src="imgs/footer_navbar_icon_4.png" class="footer-navbar-itemIcon" />
						<p class="footer-navbar-itemText">在线咨询</p>
					</a>
				</div>
			</div>
		</div>
	`;
	
	class Footerbar extends HTMLElement {
		static get observedAttributes() {
		}
			
		constructor() {
		    super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			
			shadowRoot.innerHTML = template;
			this._root = shadowRoot;
		
		}
		
		connectedCallback() {
			// 自定义元素首次插入文档dom时调用
			// 相较于constructor只会执行一次，这个生命周期每次将节点连接到dom时都会调用
			// 可能会执行多次(比如同一个自定义元素remove, append多次)
			const navbar_el = this._root.querySelectorAll('.footer-navbar-item');
			const page_index = parseInt(this.getQueryString('pageIndex'));
			const navbar_icon_el = this._root.querySelectorAll('.footer-navbar-itemIcon');
			const match_page_index = {
				'0': 0,
				'4': 1
			};
			const navbar_icons = [
				{ path: 'imgs/footer_navbar_icon_1.png',  activePath: 'imgs/footer_navbar_active_icon_1.png' },
				{ path: 'imgs/footer_navbar_icon_2.png',  activePath: 'imgs/footer_navbar_active_icon_2.png' },
				{ path: 'imgs/footer_navbar_icon_3.png',  activePath: 'imgs/footer_navbar_active_icon_3.png' },
				{ path: 'imgs/footer_navbar_icon_4.png',  activePath: 'imgs/footer_navbar_active_icon_4.png' }
			];

			if(match_page_index[page_index] || match_page_index[page_index] == 0) {
				let current_index = match_page_index[page_index];
				navbar_el[current_index].className = 'footer-navbar-item footer-navbar-item_active';

				console.log(current_index);
				navbar_icon_el[current_index].setAttribute('src', navbar_icons[current_index].activePath);
			}

		}
		
		disconnectedCallback() {
			// 自定义元素从文档中删除时，调用
		}
		
		adoptedCallback() {
			// 自定义元素移动到新的文档
			// 比如使用 adoptNode 方法在多iframe下移动元素
		}

		/**
		 * 获取url参数
		 * @param {string} name
		 * */ 
		getQueryString(name) { 
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
			var r = window.location.search.substr(1).match(reg);

			if (r != null) return unescape(r[2]); 

			return null; 
		}
	}
	customElements.define('footer-bar', Footerbar);
})();